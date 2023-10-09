import { Injectable } from '@angular/core';
import { ICondition, IDiagnosesFormValues, IDiagnosis, IDiagnosesIcpc2, IEncounterData } from '../models';
import { RandomIdService } from './randomId.service';

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  constructor(private readonly randomIdService: RandomIdService) {}

  getJson(formValues: IDiagnosesFormValues,  diagnosesIcpc2List: IDiagnosesIcpc2[]): IEncounterData {

      return {
        encounter: {
          date: new Date(formValues.selectedDate).toISOString()
        },
        conditions: this.getConditions(formValues.diagnosis, diagnosesIcpc2List)
      }
  }

  private getConditions(diagnosis: IDiagnosis[], diagnosesIcpc2List: IDiagnosesIcpc2[]): ICondition[] {
    const filteredList = diagnosis.filter(condition => condition.select);

    return filteredList.filter(condition => condition.select).map(item => ({
            id: this.randomIdService.generateGuid(),
            context: {
              identifier: {
                type: {
                  coding: [{
                            system: 'eHealth/resources',
                            code: 'encounter'
                        }],
                },
                value: diagnosesIcpc2List.find(diagnoses => item.select === diagnoses.code)?.id  ?? '0'
                }
            },
            code: {
              coding: [{
              system: 'eHealth/ICPC2/condition_codes',
              code: item.select
            }]
            },
            notes: item.note,
            onset_date: new Date().toISOString(),
          }));
  }
}

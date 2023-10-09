export interface IEncounter {
  date: string;
}

export interface IIdentifier {
  type: {
    coding: {
      system: string;
      code: string;
    }[];
  };
  value: string;
}

export interface ICode {
  coding: {
    system: string;
    code: string;
  }[];
}

export interface ICondition {
  id: string;
  context: {
    identifier: IIdentifier;
  };
  code: ICode;
  notes: string;
  onset_date: string;
}

export interface IEncounterData {
  encounter: IEncounter;
  conditions: ICondition[];
}

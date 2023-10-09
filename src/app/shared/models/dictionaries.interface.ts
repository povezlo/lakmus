export interface IDiagnosesIcpc2 {
  id: string;
  chapterNumber: number | null;
  chapterName: string;
  blockNumber: string;
  blockName: string;
  code: string;
  name: string;
  shortName: string;
  isPublic: boolean;
}

export interface IDiagnosis {
  select: string;
  note: string;
}

export interface IDiagnosesFormValues {
  diagnosis: IDiagnosis[];
  selectedDate: string;
}

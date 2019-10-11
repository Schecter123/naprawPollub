export interface Defect{
    id?: number;
    defectType: DefectType;
    idPlace: number;
    idUser: number;
    idRoom: number;
    defectState: DefectState;
    description: string;
    date: any;
    photoURL: string;
    latitude: number;
    longitude: number;
  }
  
export enum DefectType{
    Computers,
    Infrastructure,
    Electronic,
    Hydraulic,
    Mechanical,
    Others
  }
  
export enum DefectState{
    ForRepair,
    Repaired,
    RepairInProgress,
    WontBeRepaired
  }
  
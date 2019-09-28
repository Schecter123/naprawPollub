export interface Defect{
    id?: number;
    defectType: DefectType;
    idPlace: number;
    idUser: number;
    idRoom: number;
    rating: number;
    defectState: DefectState;
    description: string;
    date: any;
    photoURL: string;
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
  
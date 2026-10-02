export type Role = 'receiver' | 'giver' | 'admin';
export type JobStatus = 'matching' | 'assigned' | 'en_route' | 'collected' | 'completed';
export interface Job { id:string; address:string; material:string; status:JobStatus; eta:string; provider:string; amount:number; }

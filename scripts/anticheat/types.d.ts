export interface Module {
  enabled: boolean;
}

export interface Nuker extends Module {
  limit: number;
}
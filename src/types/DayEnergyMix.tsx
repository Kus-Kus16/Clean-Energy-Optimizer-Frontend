
export interface EnergySourcePercentage {
    energySource: string,
    energyPercentage: number
}

export default interface DayEnergyMix {
    date: string;
    energySources: EnergySourcePercentage[];
    cleanEnergyPercentage: number;
}
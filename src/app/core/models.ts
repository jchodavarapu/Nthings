export interface DashStat {
    key: string;
    value: number;
}
export interface Device {
    name: string;
    description: string;
    message_rate: number;
    channels: number;
    status: string;
    image?: string;
}
export interface Channel {
    name: string;
    description: string;
    message_rate: number;
    devices: number;
    status: string;
}
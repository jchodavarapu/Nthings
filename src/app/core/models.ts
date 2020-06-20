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
export interface Rule {
    name: string;
    description: string;
    emails: number;
    smss: number;
    webhooks: number;
    conditions: number;
    status: string;
}
export interface Alert {
    name: string;
    description: string;
    emails: number;
    smss: number;
    webhooks: number;
    alerts: number;
    status: string;
}
export interface Role {
    name: string;
    description: string;
    users: number;
    status: string;
}
export interface User {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    status: string;
    cover_image?: string;
    profile_image?: string;
}
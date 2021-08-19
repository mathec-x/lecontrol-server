import io from 'socket.io'


type DefaultEventsMap = "dispatch"|"refresh";

declare module 'socket.io' {
    export interface EventsMap extends DefaultEventsMap { }
    export interface Server { }
    export interface Namespace { }
    export interface Socket {
        user?: {
            id: number;
            uuid: string;
            name: string;
            mail: string;
            token: string;
            Company: {
                id: number;
                name: string;
            };
        }
     }
}

declare module 'express' {
    export interface Request {
        io: io.Server;
        socketId: String;
        user: {
            id: number;
            uuid: string;
            name: string;
            mail: string;
            token: string; 
            Company: {
                id: number;
                name: string;
            };
        }
    } 
}
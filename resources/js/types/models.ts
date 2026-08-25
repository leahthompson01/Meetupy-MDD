import type { User } from './auth';

export type { User };

export type MeetupGroup = {
    id: number;
    user_id: number;
    name: string;
    description: string | null;
    location: string;
    created_at: string;
    updated_at: string;
    user?: User;
};

export type Event = {
    id: number;
    meetup_group_id: number;
    title: string;
    slug: string;
    description: string | null;
    location: string;
    starts_at: string;
    created_at: string;
    updated_at: string;
    meetup_group?: MeetupGroup;
};

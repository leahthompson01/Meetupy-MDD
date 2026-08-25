import { Head, Link } from '@inertiajs/react';
import EventCard from '@/components/event-card';
import { show } from '@/routes/events';
import type { Event } from '@/types';

interface Props {
    events: Event[];
}

export default function EventsIndex({ events }: Props) {
    return (
        <>
            <Head title="Upcoming Events" />

            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Upcoming Events</h1>
            </div>

            <div className="space-y-4">
                {events.map( (event) => (
                    <div key={event.id}>
                        <h2>{event.title}</h2>
                        <p>{event.location}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
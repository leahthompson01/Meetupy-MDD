import { Head, Link } from '@inertiajs/react';
import EventCard from '@/components/event-card';
import type { Event } from '@/types';
import { create, show } from '@/routes/events';

interface Props {
    events: Event[];
}

export default function EventsIndex({ events }: Props) {
    return (
        <>
            <Head title="Upcoming Events" />

            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Upcoming Events</h1>
                <Link href={create.url()}> Create Event </Link>
            </div>

            <div className="space-y-4">
                {events.map( (event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </>
    );
}
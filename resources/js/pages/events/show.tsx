import { Head } from '@inertiajs/react';
// import { index, show } from '@/routes/events';
import type { Event } from '@/types';

interface Props {
    event: Event;
}

export default function EventShow({ event }: Props) {
    return (
        <>
            <Head title={event.title} />

            <div className="rounded-xl border border-sidebar-border/70 p-6 dark:border-sidebar-border">
                <h1 className="text-2xl font-semibold">{event.title}</h1>

                {event.meetup_group && (
                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                        {event.meetup_group.name}
                    </p>
                )}

                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <p>
                        {new Date(event.starts_at).toLocaleString(undefined, {
                            timeZone: 'UTC',
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                        })}{' '}
                        UTC
                    </p>

                    <p>{event.location}</p>
                </div>

                {event.description && (
                    <p className="mt-4 text-sm">{event.description}</p>
                )}
            </div>
        </>
    );
}

EventShow.layout = ({ event }: { event: Event }) => ({
    breadcrumbs: [
        { title: 'Upcoming Events', href: index.url() },
        { title: event.title, href: show.url(event) },
    ],
});
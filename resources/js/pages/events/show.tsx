import { Head, Link } from '@inertiajs/react';
import type { Event } from '@/types';
import { edit, index, show } from '@/routes/events';

interface Props {
    event: Event;
    canEdit: boolean;
}

export default function EventShow({ event, canEdit }: Props) {
    return (
        <>
            <Head title={event.title} />

            {canEdit && <Link href={edit.url(event)}>Edit</Link>}

            <div className="mt-4 rounded-xl border border-sidebar-border/70 p-6 dark:border-sidebar-border">
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
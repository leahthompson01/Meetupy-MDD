import { Link } from '@inertiajs/react';
import type { Event } from '@/types';
import { show } from '@/routes/events';

export default function EventCard({ event }: { event: Event }) {
    return (
        <Link
            href={show.url(event)}
            className="block rounded-xl border border-sidebar-border/70 p-5 transition-colors hover:bg-sidebar-accent dark:border-sidebar-border"
        >
            <h2 className="text-lg font-medium">{event.title}</h2>

            <div className="mt-2 space-y-1 text-sm text-muted-foreground">
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
                <p>
                    {event.meetup_group?.name} &middot; Organized by {event.meetup_group?.user?.name}
                </p>
            </div>
        </Link>
    );
}

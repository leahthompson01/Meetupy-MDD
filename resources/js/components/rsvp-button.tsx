import { Link, usePage } from '@inertiajs/react';
import type { Event } from '@/types';
import { destroy, store } from '@/actions/App/Http/Controllers/RsvpController';

interface Props {
    event: Event;
    isRsvped: boolean;
}

export default function RsvpButton({ event, isRsvped }: Props) {
    const { auth } = usePage().props;

    return (
        <>
            {auth.user && (
                isRsvped ? (
                    <Link href={destroy.url(event)} method="delete" as="button">
                        Cancel
                    </Link>
                ) : (
                    <Link href={store.url(event)} method="post" as="button">
                        RSVP
                    </Link>
                )
            )}
        </>
    );
}
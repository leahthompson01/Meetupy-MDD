import { Form, Head } from '@inertiajs/react';
import EventController from '@/actions/App/Http/Controllers/EventController';
import EventForm from '@/components/event-form';
import { Button } from '@/components/ui/button';
import type { Event } from '@/types';

interface Props {
    event: Event;
}

export default function EventEdit({ event }: Props) {
    return (
        <>
            <Head title="Edit Event" />

            <Form {...EventController.update.form(event)} className="max-w-xl space-y-6"
            >
                {({ processing, errors }) => (
                    <>
                    <EventForm
                        errors={errors}
                        event={event}
                    />

                    <Button type="submit" disabled={processing}>
                        {processing ? 'Editing...' : 'Edit Event' }
                    </Button>
                    
                    </>

                )}
    
            </Form>        
            </>
    );
}
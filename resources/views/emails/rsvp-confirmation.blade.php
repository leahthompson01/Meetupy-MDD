<x-mail::message>
    # You're registered!

    Hi {{ $user->name }},

    You're confirmed for **{{ $event->title }}**. We're excited to see you there!

    **Event Details**

    - **Date:** {{ $event->starts_at->format('F j, Y \a\t g:i A') }} UTC
    - **Location:** {{ $event->location }}
    @if ($event->description)
        - **About:** {{ $event->description }}
    @endif

    <x-mail::button :url="route('events.show', $event)">
        View Event
    </x-mail::button>

    If you can no longer attend, you can cancel your RSVP from the event page.

    Thanks,
    {{ config('app.name') }}
</x-mail::message>

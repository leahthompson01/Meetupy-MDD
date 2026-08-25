import InputError from '@/components/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Event, MeetupGroup } from '@/types';

type Props = {
    errors: Partial<Record<string, string>>;
    meetupGroups?: MeetupGroup[];
    event?: Event;
};

export default function EventForm({ errors, meetupGroups, event }: Props) {
    return (
        <>
            <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" required defaultValue={event?.title} />
                <InputError message={errors.title} />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <textarea
                    id="description"
                    name="description"
                    rows={4}
                    defaultValue={event?.description ?? ''}
                    className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                />
                <InputError message={errors.description} />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" name="location" required defaultValue={event?.location} />
                <InputError message={errors.location} />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="starts_at">Date & Time</Label>
                <Input
                    id="starts_at"
                    name="starts_at"
                    type="datetime-local"
                    required
                    defaultValue={event?.starts_at ? event.starts_at.slice(0, 16) : undefined}
                />
                <InputError message={errors.starts_at} />
            </div>

            {meetupGroups && (
                <div className="grid gap-2">
                    <Label htmlFor="meetup_group_id">Meetup Group</Label>
                    <select
                        id="meetup_group_id"
                        name="meetup_group_id"
                        required
                        defaultValue={event?.meetup_group_id}
                        className="border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    >
                        <option value="">Select a group</option>
                        {meetupGroups.map((group) => (
                            <option key={group.id} value={group.id}>
                                {group.name}
                            </option>
                        ))}
                    </select>
                    <InputError message={errors.meetup_group_id} />
                </div>
            )}
        </>
    );
}

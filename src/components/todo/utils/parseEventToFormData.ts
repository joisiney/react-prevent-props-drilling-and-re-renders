import {FormEvent} from 'react';

export const parseEventToFormData = <T>(event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    event.currentTarget.reset();
    return Object.fromEntries(formData.entries()) as T;

};
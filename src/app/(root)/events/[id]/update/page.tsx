import EventForm from '@/src/components/shared/EventForm';
import { getEventById } from '@/src/lib/action/event.actions';
import { auth } from '@clerk/nextjs';
import React from 'react'

type updateEventParams =  {
    params : {
        id : string
    }
}
const UpdateEvent = async ({params : { id }} : updateEventParams) => {
    const { sessionClaims } = auth();
    
    const userId = sessionClaims?.userId as string;

    const updateEvent = await getEventById(id);
    
    return (
      <>
        <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
          <h3 className="wrapper h3-bold text-center sm:text-left">Update Event</h3>
        </section>
        
        <div className="wrapper my-8">
          <EventForm userId={userId} type="Update" event={updateEvent}  eventId={id}  />
        </div>
      </>
    )
  }

export default UpdateEvent
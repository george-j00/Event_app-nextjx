import Collection from '@/src/components/shared/Collection';
import { getOrganizedEvents } from '@/src/lib/action/event.actions';
import { auth } from '@clerk/nextjs'

import React from 'react'

const Profile = async () => {

    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId as string;
    const limit = 6 ;
    const page = 1; 
    const organizedEvents = await getOrganizedEvents({userId ,limit,page });
  
  return ( 
    <>
        <section>
                <h1 className='flex justify-center  font-extrabold text-2xl mt-4'>Profile</h1>
            <div>
                <h1 className='flex justify-center md:justify-start md:wrapper font-extrabold text-3xl mt-4'>My Tickets </h1>
                <Collection
                    data = {[]}
                    emptyTitle = "Not organized Events"
                    emptyStateSubtext= "Return back to the list of events"
                    limit={6}
                    page={1} 
                    collectionType='My_Tickets'
                />
            </div>
            <div className=''>
                <h1 className='flex justify-center  md:justify-start md:wrapper font-extrabold text-3xl mt-4'>Events Organized </h1>
                <Collection
                    data = {organizedEvents?.data}
                    emptyTitle = "Not organized Events"
                    emptyStateSubtext= "Return back to the list of events"
                    limit={limit}
                    page={organizedEvents?.1 : 1} 
                    collectionType='Events_Organized'   
                />
            </div>
        </section>
    </>
  )
}

export default Profile
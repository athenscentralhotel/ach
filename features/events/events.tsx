import { AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import Button, { CallButton } from '../button';
import { updateSelectedJobModel } from '../eventPicker';
import {
  currentEventSelector,
  eventSelector,
} from '../eventPicker/eventPickerSlice';
import Padding from '../padding';
import EventCard from './EventCard';
import eventDataSlice from './eventDataSlice';

const Events = () => {
  const events = useSelector(eventSelector);
  const currentEvent = useSelector(currentEventSelector);

  const dispatch = useDispatch();

  return (
    <Padding
      className="relative z-[1] w-full min-h-fit rounded-t-lg pt-24 mb-16"
      id="events"
    >
      <div className="w-full">
        <h2 className="font-title tracking-wider text-gray-dark text-xl sm:text-2xl md:text-3xl font-light mb-8 mt:text-center pb-6">
          Events
        </h2>
        <div className="mt:flex flex-col flex-wrap justify-center items-center">
          <nav className="flex flex-row flex-wrap gap-3">
            {events.map((event) => {
              const handleUpdateSelectedEvent = () => {
                dispatch(updateSelectedJobModel(event.id));
              };

              return (
                <Button
                  key={event.id}
                  handleClick={handleUpdateSelectedEvent}
                  label={event.name}
                  selected={event.selected}
                  className="shadow-sm"
                />
              );
            })}
          </nav>
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-7xl mt-10 md:mt-12 xl:mt-14">
            <div className="flex justify-center items-center w-[65rem] event-width-clamp aspect-[4/3]">
              <AnimatePresence mode="wait">
                <EventCard
                  key={eventDataSlice[currentEvent.id].eventType}
                  roomData={eventDataSlice[currentEvent.id]}
                />
              </AnimatePresence>
            </div>
            <div className="w-max max-w-fit min-h-full flex flex-col gap-6 justify-center items-start mt:items-center">
              <p className="font-subtitle font-medium text-lg text-gray-dark">
                Call to set up an event
              </p>
              <CallButton />
            </div>
          </div>
        </div>
      </div>
    </Padding>
  );
};

export default Events;

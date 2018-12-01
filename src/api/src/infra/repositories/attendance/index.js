import {reject, pick} from 'ramda';
import {Attendance} from '../../../domain/entities/attendance';
import {Attendee} from '../../../domain/value-objects/attendee';

function toEntity(attendanceDoc) {
  data = attendanceDoc.toObject();

  return Attendance({
    ...pick(['eventId', 'rating', 'attendAt', 'createdAt', 'updatedAt'], data),
    attendee: Attendee(pick(['name', 'email', 'phone'], data)),
  });
}

function toModelData(attendance) {
  const {attendee} = attendance;
  return {
    ...reject('attendee', attendance),
    ...attendee,
  };
}

export default function createAttendanceRepository(model) {
  function create(attendance) {
    const data = toModelData(attendance);

    return model.create(data).then(toEntity);
  }

  function findById(eventId) {
    return model.findById(eventId).then(toEntity);
  }

  return {
    create,
    findById,
  };
}

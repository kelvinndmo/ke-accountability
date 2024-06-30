import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMissingPersonDTO } from '../dtos/missing-person.dto';
import { MissingPersonEntity } from '../entities/missing.entity';
import { MissingPersonService } from '../services/missing-person.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('missing-person')
export class MissingPersonController {
  constructor(private readonly missingPersonService: MissingPersonService) {}

  @ApiOperation({
    summary: 'Create a missing person',
    operationId: 'createMissingPerson',
    tags: ['missing-person'],
  })
  @Post('')
  createMissingPerson(@Body() body: CreateMissingPersonDTO) {
    const missingPerson = new MissingPersonEntity();

    missingPerson.firstName = body.firstName;
    missingPerson.lastName = body.lastName;
    missingPerson.foundContact = body.foundContact;
    missingPerson.idNumber = body.idNumber;
    missingPerson.additionalInfo = body.additionalInfo;
    missingPerson.age = body.age;
    missingPerson.lastSeenAt = body.lastSeenAt;
    missingPerson.lastSeenOn = body.lastSeenOn;

    return this.missingPersonService.createMissingPerson(missingPerson);
  }

  @ApiOperation({
    summary: 'Get all missing people',
    operationId: 'getMissingPeople',
    tags: ['missing-person'],
  })
  @Get('')
  getMissingPeople() {
    return this.missingPersonService.getMissingPeople();
  }
}

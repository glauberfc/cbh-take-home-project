# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

To avoid spending more time than expected for this challenge, I'm creating 2 simple tickets for this task. I would create more tickets or describe them better in a normal working situation, as I could ask colleagues for more information about the implementation of the `getShiftsByFacility` and `generateReport` functions, as well as the database implementation.

### Ticket #1 - add the ability for Facilities to save their own custom ids for each Agent they work with

You need to add the ability for Facilities to save their own custom ids for each Agent they work with.

**Implementation details**
Use a library like uuid to generate the new ids.

**Time/effort estimates**
2 hours.

**Acceptance criteria**
Facilities can save their own custom ids for each Agent they work with.

### Ticket #2 - use custom ids when generating reports for Facilities

Now that Facilities can save their own custom ids for each Agent they work with, use that custom ids when generating reports for Facilities.

**Implementation details**
Update the `generateReport` function to use the custom ids for each Agent rather than their internal database ids.

**Time/effort estimates**
1 hour.

**Acceptance criteria**
Reports are using the custom ids for each Agent rather than their internal database ids.

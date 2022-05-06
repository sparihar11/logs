namespace al.auditlog;

using {
    managed,
    cuid,
    User
} from '@sap/cds/common';

entity AuditLogs : cuid, managed {
    useremail       : String;
    userfullname    : String;
    date            : DateTime;
    timezone        : String;
}

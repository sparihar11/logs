using al.auditlog as al from '../db/schema';

service AuditlogService {

    entity AuditLogs  as projection on al.AuditLogs;
}
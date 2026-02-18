type Class = "wizard" | "warrior" | "rogue";
type Race = "elf" | "human" | "dwarf";
type Hero = `Hero: ${Race} ${Class}`;
// Hero: elf wizard | Hero: elf warrior | Hero: elf rogue | Hero: human wizard | Hero: human warrior | Hero: human rogue | Hero: dwarf wizard | Hero: dwarf warrior | Hero: dwarf rogue

type logRecord = `${string}: ${number}`;

// this is valid because it's a string followed by a colon and a number
const criticalErr: logRecord = "CRITICAL: 69";

// these are all invalid
// const criticalErr: logRecord = "CRITICAL 92";
// const criticalErr: logRecord = "CRITICAL: 92a";
// const criticalErr: logRecord = "92: CRITICAL";

export type LogLevel = "info" | "warn" | "error";
export type LogSourceType = "api" | "database" | "auth";
export type LogMessage = `${LogLevel}: ${string}`;
export type LogSource = `${LogSourceType}_${number}`;

export function createLogEntry(message: LogMessage, source: LogSource): string {
  return `[${source}] LOG - ${message}`;
}

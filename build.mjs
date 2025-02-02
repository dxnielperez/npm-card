// Pull in our modules
import chalk from "chalk";
import boxen from "boxen";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

// Define options for Boxen
const options = {
  padding: 1.5,
  margin: 1.5,
  borderStyle: "round",
  borderColor: "#FB8F4D",
};

// Text + chalk definitions
const data = {
  name: chalk.white("      Daniel Perez"),
  handle: chalk.white("@dxnieldev"),
  shorthandle: chalk.white("https://www.dxniel.dev"),
  work: chalk.hex("#FB8F4D")("Associate Software Engineer at Bentkey Ventures"),
  github: chalk.hex("#FB8F4D")("https://github.com/dxnielperez"),
  linkedin: chalk.hex("#FB8F4D")(
    "https://www.linkedin.com/in/daniel-f-perez/ "
  ),
  web: chalk.hex("#FB8F4D")("https://www.dxniel.dev"),
  labelWork: chalk.white.bold("    Work:"),
  labelGitHub: chalk.white.bold("  GitHub:"),
  labelLinkedIn: chalk.white.bold("LinkedIn:"),
  labelWeb: chalk.white.bold("     Web:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} ${chalk.hex("#FB8F4D")("/")} ${data.handle} ${data.shorthandle && chalk.hex("#FB8F4D")("/")} ${data.shorthandle}`;
const working = `${data.labelWork}  ${data.work}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  webing +
  newline +
  working +
  newline +
  githubing +
  newline +
  linkedining +
  newline;

writeFileSync(
  join(import.meta.dirname, "bin/output"),
  chalk.green(boxen(output, options))
);

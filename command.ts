import { Command } from "./deps.ts";

const { options, args } = await new Command()
  .name("helloworld-deno-velociraptor")
  .version("0.1.0")
  .description("helloworld-deno-velociraptor")
  .arguments("<arg>")
  .option("--name <name:string>", "name", { required: true })
  .parse(Deno.args);

console.log({ args });
console.log({ options });

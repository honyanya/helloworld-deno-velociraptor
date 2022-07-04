# helloworld-deno-velociraptor

Created in another repository for confirmation of git hooks.

```sh
$ deno run command.ts hello --name honyanya      
{ args: [ "hello" ] }
{ options: { name: "honyanya" } }
```

Velociraptor install

https://velociraptor.run/docs/installation/

```sh
$ deno install -qAn vr https://deno.land/x/velociraptor@1.4.0/cli.ts
$ export PATH="/home/vagrant/.deno/bin:$PATH"
$ vr --version
1.4.0
```

git hooks setup.

```sh
$ vr

## For pre-commit.
$ cat ./.git/hooks/pre-commit 
#!/bin/sh
# Generated by Velociraptor 1.5.0
vr run-hook pre-commit "$@"
```

check

```sh
$ vr format-check                                  

from /home/vagrant/workspace/tmp/helloworld-deno-velociraptor/command.ts:
 8 | -  .option("--name <name:string>",
 9 | -   "name",
10 | -    { required: true }
11 | -    )
 8 | +  .option("--name <name:string>", "name", { required: true })

error: Found 1 not formatted file in 3 files
error: Failed at the format-check script
```

```sh
$ git commit -m "[add] git hook using velociraptor."   
Checked 2 files

from /home/vagrant/workspace/tmp/helloworld-deno-velociraptor/command.ts:
 8 | -  .option("--name <name:string>",
 9 | -   "name",
10 | -    { required: true }
11 | -    )
 8 | +  .option("--name <name:string>", "name", { required: true })

error: Found 1 not formatted file in 3 files
error: Failed at the format-check script
error: Failed at the pre-commit script
```

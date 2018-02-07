import json
import os

ldir = os.fsencode("../levels")
tdir = os.fsencode("../tiles")


def readJSON(arg):
    jstring = ""
    with open(arg) as f:
        for l in f:
            jstring += l.strip()
    return json.loads(jstring)


tilesets = {}

print("\nTilesets:")
for filename in os.listdir(tdir):
    if str(filename).endswith(".json'"):
        file = os.path.join(tdir, filename)
        print(file)

        jfile = readJSON(file)

        # Trim wangsets, not needed in map
        jfile.pop("wangsets", None)

        # Get image link and change path.
        image_name = jfile["image"].split("/")[-1]
        image_path = "..\/images\/" + image_name
        # print(image_name, image_path)
        jfile["image"] = image_path

        # Get name
        ts_name = jfile["image"].split("/")[-1].split(".")[0]

        tilesets[ts_name] = jfile


print("\nLevels:")
for filename in os.listdir(ldir):
    if str(filename).endswith(".json'"):
        file = os.path.join(ldir, filename)
        print(file)
        jfile = readJSON(file)

        # Begin conversion

        # Load phaser-friendly tileset into map file
        required_tilesets = []
        for ts in jfile["tilesets"]:
            if "source" in ts:
                ts_name = ts["source"].split("/")[-1].split(".")[0]
            else:
                ts_name = "tileset-" + ts["name"]

            ts_fgid = ts["firstgid"]
            print(ts_name)
            required_tilesets.append((ts_name, ts_fgid))
            pass

        jfile["tilesets"] = []
        for ts_group in required_tilesets:
            if ts_group[0] in tilesets:
                # print()

                the_ts = tilesets[ts_group[0]]
                the_ts["firstgid"] = ts_group[1]

                jfile["tilesets"].append(the_ts)
            pass

        # Replace key name
        # Add new ones into keys dict like so:
        # 'old_key_name' : 'new_key_name'

        keys = {'tileWidth': 'tilewidth',
                'tileHeight': 'tileheight'}
        for key in keys:
            try:
                jfile[keys[key]] = jfile.pop(key)
                # if "key"
                print(key, "->", keys[key])
                pass
            except Exception as e:
                if type(e) == KeyError:
                    pass
                else:
                    raise
            pass

        try:
            with open(file, "w") as jsonFile:
                json.dump(jfile, jsonFile)
            pass
        except Exception:
            raise

        print()
        continue
    else:
        continue

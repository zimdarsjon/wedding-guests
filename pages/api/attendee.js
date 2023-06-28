import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("test");
    switch (req.method) {
        case "POST":
            //let bodyObject = JSON.parse(req.body);
            //let myPost = await db.collection("posts").insertOne(bodyObject);
            //res.json(myPost.ops[0]);
            break;
        case "GET":
            if (req.query.all) {
                const allAttendees = await db.collection("attendees").find({}).toArray();
                res.json({ status: 200, data: allAttendees });
            } else if (req.query.name) {
                const name = req.query.name;
                const regex = new RegExp(name, 'i');
                const attendees = await db.collection("attendees").find({
                    $or:
                        [
                            { name: { $regex: regex } },
                            { partner: { $regex: regex } }
                        ]
                }).toArray();
                res.json({ status: 200, data: attendees });
            } else if (req.query.both) {
                const attendees = await db.collection("attendees").find({
                    going: { $gte: 1 },
                    wisconsin: true,
                    thailand: true
                }).toArray();
                res.json({ status: 200, data: attendees });
            } else if (req.query.wisconsin) {
                const attendees = await db.collection("attendees").find({
                    going: { $gte: 1 },
                    wisconsin: true,
                    thailand: false
                }).toArray();
                res.json({ status: 200, data: attendees });
            } else if (req.query.thailand) {
                const attendees = await db.collection("attendees").find({
                    going: { $gte: 1 },
                    thailand: true,
                    wisconsin: false
                }).toArray();
                res.json({ status: 200, data: attendees });
            } else if (req.query.none) {
                const attendees = await db.collection("attendees").find({
                    going: 0,
                }).toArray();
                res.json({ status: 200, data: attendees });
            } else if (req.query.pending) {
                const attendees = await db.collection("attendees").find({
                    going: { $exists: false },
                }).toArray();
                res.json({ status: 200, data: attendees });
            }
            break;
        case "PUT":
            if (req.query.going) {
                req.query.going = Number(req.query.going)
            }
            if (req.query.wisconsin) {
                req.query.wisconsin === 'true' ? req.query.wisconsin = true : req.query.wisconsin = false;
            }
            if (req.query.thailand) {
                req.query.thailand === 'true' ? req.query.thailand = true : req.query.thailand = false;
            }
            if (req.query.bringingGuest) {
                req.query.bringingGuest === 'true' ? req.query.bringingGuest = true : req.query.bringingGuest = false;
            }
            const update = await db.collection("attendees").findOneAndUpdate({name: req.query.name}, { $set: req.query});
            res.json({ status: 200, data: update });
            break;
    }

}
import Subscriber from "../../Admin/models/Subscriber";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await Subscriber.findAll({
      attributes: ["id", "email", "created_at"],
    }).then((subscribers) => {
      res.status(200).json(subscribers);
    });
  } else if (req.method === "POST") {
    // if (
    //   req?.headers?.origin !== "https://inorins.com.np" &&
    //   req?.headers?.origin !== "https://www.inorins.com.np"
    // ) {
    //   res.status(403).json({ message: "Forbidden" });
    //   return;
    // }
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Please enter your email address",
      });
    }
    // validate email format
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex) {
      try {
        const emailExists = await Subscriber.findOne({
          where: {
            email: email,
          },
        });
        if (emailExists) {
          return res.status(400).json({
            success: false,
            message: "You are already a subscriber",
          });
        }
        const subscriber = await Subscriber.create({ email });
        return res.status(201).json({
          success: true,
          message: "Thank you for subscribing " + subscriber.email,
          subscriber,
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }
    }
  } else {
    return res.status(404).send({ message: "Resource not found", status: 400 });
  }
}

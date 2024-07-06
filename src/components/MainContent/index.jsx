import React from 'react';
import { User } from '../User';

const MainContent = ({ user }) => {
  return (
    <div>
      status: {user.status}
      <User imgSrc={user.imgSrc} alt={user.alt} userName={user.userName} />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At nulla, odio
        sint animi a voluptatem qui tempora in voluptatibus natus ipsam
        inventore vel ullam nesciunt error assumenda eaque, molestias velit
        veritatis illum dolorum neque est. Quisquam, mollitia nam harum debitis,
        voluptates quas iste ab adipisci dolor natus incidunt officiis
        voluptatibus, vel iure consequatur. Ex accusamus alias, quaerat deserunt
        fugiat odio qui. Eveniet quaerat, molestiae numquam libero alias nulla
        quos, placeat sint tempora ab maxime? Officiis laudantium distinctio
        velit hic quam ipsum est, magnam nemo ex nobis tempora numquam dicta
        molestiae? Optio illo veniam amet, natus facere quae doloribus
        recusandae blanditiis aliquam fuga aliquid porro ut, neque in voluptates
        veritatis quia explicabo placeat corrupti, ipsum soluta laborum odio.
        Alias quisquam voluptates laborum quia ut enim, labore fuga sit, quod
        fugiat recusandae illum facere esse. Itaque unde officia, cumque culpa,
        eum quisquam ratione laborum impedit incidunt quos dicta voluptates
        ullam odit repellat vitae? Eum placeat mollitia excepturi eos, itaque
        amet nisi perspiciatis velit sit sint voluptates odit, minus
        exercitationem. Eos vero numquam quaerat libero quibusdam illum eius
        quisquam sint omnis debitis. Dignissimos, reprehenderit suscipit. Enim
        temporibus modi natus sed dolor quod at! Reiciendis sit incidunt officia
        repellendus aliquam, doloribus quae obcaecati odio!
      </p>
      <img
        src='https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc='
        width={300}
        height={300}
      />
    </div>
  );
};

export default MainContent;

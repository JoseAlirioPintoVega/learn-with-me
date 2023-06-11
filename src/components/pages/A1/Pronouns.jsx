import React from "react";

const Pronouns = () => {
  return (
    <div>
      <h1 className="text-[30px] text-center  w-full">Pronouns</h1>
      <div>
        {/* <ul>
          <li>I</li>
          <li>Yo</li>
          <li>He</li>
          <li>el</li>
          <li>It</li>
          <li>eso esa "animales o objetos"</li>
          <li>We</li>
        </ul> */}
        <table class="table-auto m-8  text-[20px] mx-auto">
          <thead>
            <tr>
              <th class="px-4 py-2">Pronombre en inglés</th>
              <th class="px-4 py-2">Traducción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-4 py-2">I</td>
              <td class="border px-4 py-2">Yo</td>
            </tr>
            <tr>
              <td class="border px-4 py-2">You</td>
              <td class="border px-4 py-2">Tú/Usted</td>
            </tr>
            <tr>
              <td class="border px-4 py-2">He</td>
              <td class="border px-4 py-2">Él</td>
            </tr>
            <tr>
              <td class="border px-4 py-2">She</td>
              <td class="border px-4 py-2">Ella</td>
            </tr>
            <tr>
              <td class="border px-4 py-2">It</td>
              <td class="border px-4 py-2">
                Eso o Esa /{" "}
                <span className="italic text-[14px]">
                  "Para animales o cosas"
                </span>
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2">You</td>
              <td class="border px-4 py-2">Ustedes</td>
            </tr>
            <tr>
              <td class="border px-4 py-2">They</td>
              <td class="border px-4 py-2">Ellos o Ellas</td>
            </tr>
            <tr>
              <td class="border px-4 py-2">We</td>
              <td class="border px-4 py-2">Nosotros o Nosotras</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pronouns;

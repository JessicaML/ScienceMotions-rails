import React from "react";
import Text from "./text/Text";
import  "../../../../scimo/styles/GroupsPeriods.scss"


const GroupsPeriods = props => {

  return (
    <div id="groups-periods">
      <section id="top">
        <div className="fond" style={{marginTop: "40px", id:"smoothscroll"}}>
          <div id="forb" style={{float: "left", className:"style_prevu_kit"}}>
          </div>
          <div id="button" style={{float:"left", className:"button-flip"}}>
            <a id="button" className="active" href="#text">
              <button style={{color: "#fff", marginTop: "50px", type:"button", className:"btn", href:"#text"}}>More info
              </button>
            </a>
          </div>
          <div id="forb" style={{float: "right", className:"style_prevu_kit"}}>
          </div>
        </div>
        <div id="header">

        </div>
        <div className="wrapper" style={{fontFamily: "courier new"}}>
          <ul className="main">

             {/*ROW 1 */}

            <li data-pos="1" data-nb="1.0079" className="type-1 cat-2">H
              <span>Hydrogen</span>
            </li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>

            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>

            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>

            <li className="empty"></li>
            <li className="empty"></li>
            <li data-pos="2" data-nb="4.0026" className="type-2 cat-2">He
              <span>Helium</span>
            </li>

            {/*ROW 2*/}

            <li data-pos="3" data-nb="6.941" className="type-3 cat-0">Li
              <span>Lithium</span>
            </li>
            <li data-pos="4" data-nb="9.0122" className="type-4 cat-0">Be
              <span>Beryllium</span>
            </li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>

            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>

            <li className="empty"></li>
            <li className="empty"></li>
            <li data-pos="5" data-nb="10.811" className="type-5 cat-0">B
              <span>Boron</span>
            </li>
            <li data-pos="6" data-nb="12.011" className="type-5 cat-0">C
              <span>Carbon</span>
            </li>
            <li data-pos="7" data-nb="14.007" className="type-5 cat-2">N
              <span>Nitrogen</span>
            </li>

            <li data-pos="8" data-nb="15.999" className="type-5 cat-2">O
              <span>Oxygen</span>
            </li>
            <li data-pos="9" data-nb="18.998" className="type-5 cat-2">F
              <span>Fluorine</span>
            </li>
            <li data-pos="10" data-nb="20.180" className="type-2 cat-2">Ne
              <span>Neon</span>
            </li>

           {/*ROW 3 */}

            <li data-pos="11" data-nb="22.990" className="type-3 cat-0">Na
              <span>Sodium</span>
            </li>
            <li data-pos="12" data-nb="24.305" className="type-4 cat-0">Mg
              <span>Magnesium</span>
            </li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>

            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>

            <li className="empty"></li>
            <li className="empty"></li>
            <li data-pos="13" data-nb="26.982" className="type-7 cat-0">Al
              <span>Aluminium</span>
            </li>
            <li data-pos="14" data-nb="28.086" className="type-5 cat-0">Si
              <span>Silicon</span>
            </li>
            <li data-pos="15" data-nb="30.974" className="type-5 cat-0">P
              <span>Phosphorus</span>
            </li>

            <li data-pos="16" data-nb="32.065" className="type-5 cat-0">S
              <span>Sulfur</span>
            </li>
            <li data-pos="17" data-nb="35.453" className="type-5 cat-2">Cl
              <span>Chlorine</span>
            </li>
            <li data-pos="18" data-nb="39.948" className="type-2 cat-2">Ar
              <span>Argon</span>
            </li>

            {/*ROW 4*/}

            <li data-pos="19" data-nb="39.098" className="type-3 cat-0">K
              <span>Potassium</span>
            </li>
            <li data-pos="20" data-nb="40.078" className="type-4 cat-0">Ca
              <span>Calcium</span>
            </li>
            <li data-pos="21" data-nb="44.956" className="type-6 cat-0">Sc
              <span>Scandium</span>
            </li>
            <li data-pos="22" data-nb="47.867" className="type-6 cat-0">Ti
              <span>Titanium</span>
            </li>
            <li data-pos="23" data-nb="50.942" className="type-6 cat-0">V
              <span>Vanadium</span>
            </li>

            <li data-pos="24" data-nb="51.996" className="type-6 cat-0">Cr
              <span>Chromium</span>
            </li>
            <li data-pos="25" data-nb="54.938" className="type-6 cat-0">Mn
              <span>Manganese</span>
            </li>
            <li data-pos="26" data-nb="55.845" className="type-6 cat-0">Fe
              <span>Iron</span>
            </li>
            <li data-pos="27" data-nb="58.933" className="type-6 cat-0">Co
              <span>Cobalt</span>
            </li>
            <li data-pos="28" data-nb="58.693" className="type-6 cat-0">Ni
              <span>Nickel</span>
            </li>

            <li data-pos="29" data-nb="63.546" className="type-6 cat-0">Cu
              <span>Copper</span>
            </li>
            <li data-pos="30" data-nb="65.39" className="type-7 cat-0">Zn
              <span>Zinc</span>
            </li>
            <li data-pos="31" data-nb="69.723" className="type-7 cat-0">Ga
              <span>Gallium</span>
            </li>
            <li data-pos="32" data-nb="72.64" className="type-7 cat-0">Ge
              <span>Germanium</span>
            </li>
            <li data-pos="33" data-nb="74.922" className="type-5 cat-0">As
              <span>Arsenic</span>
            </li>

            <li data-pos="34" data-nb="78.96" className="type-5 cat-0">Se
              <span>Selenium</span>
            </li>
            <li data-pos="35" data-nb="79.904" className="type-5 cat-1">Br
              <span>Bromine</span>
            </li>
            <li data-pos="36" data-nb="83.80" className="type-2 cat-2">Kr
              <span>Krypton</span>
            </li>

            {/*ROW 5*/}

            <li data-pos="37" data-nb="85.468" className="type-3 cat-0">Rb
              <span>Rubidium</span>
            </li>
            <li data-pos="38" data-nb="87.62" className="type-4 cat-0">Sr
              <span>Strontium</span>
            </li>
            <li data-pos="39" data-nb="88.906" className="type-6 cat-0">Y
              <span>Yttrium</span>
            </li>
            <li data-pos="40" data-nb="91.224" className="type-6 cat-0">Zr
              <span>Zirconium</span>
            </li>
            <li data-pos="41" data-nb="92.906" className="type-6 cat-0">Nb
              <span>Niobium</span>
            </li>

            <li data-pos="42" data-nb="95.94" className="type-6 cat-0">Mo
              <span>Molybdenum</span>
            </li>
            <li data-pos="43" data-nb="(96)" className="type-6 cat-0">Tc
              <span>Technetium</span>
            </li>
            <li data-pos="44" data-nb="101.07" className="type-6 cat-0">Ru
              <span>Ruthenium</span>
            </li>
            <li data-pos="45" data-nb="102.91" className="type-6 cat-0">Rh
              <span>Rhodium</span>
            </li>
            <li data-pos="46" data-nb="106.42" className="type-6 cat-0">Pd
              <span>Palladium</span>
            </li>

            <li data-pos="47" data-nb="107.87" className="type-6 cat-0">Ag
              <span>Silver</span>
            </li>
            <li data-pos="48" data-nb="112.41" className="type-7 cat-0">Cd
              <span>Cadmium</span>
            </li>
            <li data-pos="49" data-nb="114.82" className="type-7 cat-0">In
              <span>Indium</span>
            </li>
            <li data-pos="50" data-nb="118.71" className="type-7 cat-0">Sn
              <span>Tin</span>
            </li>
            <li data-pos="51" data-nb="121.76" className="type-7 cat-0">Sb
              <span>Antimony</span>
            </li>

            <li data-pos="52" data-nb="127.60" className="type-5 cat-0">Te
              <span>Tellurium</span>
            </li>
            <li data-pos="53" data-nb="126.90" className="type-5 cat-0">I
              <span>Iodine</span>
            </li>
            <li data-pos="54" data-nb="131.29" className="type-2 cat-2">Xe
              <span>Xenon</span>
            </li>

             {/*ROW 6*/}

            <li data-pos="55" data-nb="132.91" className="type-3 cat-0">Cs
              <span>Caesium</span>
            </li>
            <li data-pos="56" data-nb="137.33" className="type-4 cat-0">Ba
              <span>Barium</span>
            </li>
            <li data-pos="57-71" className="type-8">La-Lu
              <span>Lanthanide</span>
            </li>
            <li data-pos="72" data-nb="178.49" className="type-6 cat-0">Hf
              <span>Hafnium</span>
            </li>
            <li data-pos="73" data-nb="180.95" className="type-6 cat-0">Ta
              <span>Tantalum</span>
            </li>

            <li data-pos="74" data-nb="183.64" className="type-6 cat-0">W
              <span>Tungsten</span>
            </li>
            <li data-pos="75" data-nb="186.21" className="type-6 cat-0">Re
              <span>Rhenium</span>
            </li>
            <li data-pos="76" data-nb="190.23" className="type-6 cat-0">Os
              <span>Osmium</span>
            </li>
            <li data-pos="77" data-nb="192.22" className="type-6 cat-0">Ir
              <span>Iridium</span>
            </li>
            <li data-pos="78" data-nb="195.08" className="type-6 cat-0">Pt
              <span>Platinum</span>
            </li>

            <li data-pos="79" data-nb="196.97" className="type-6 cat-0">Au
              <span>Gold</span>
            </li>
            <li data-pos="80" data-nb="200.59" className="type-7 cat-1">Hg
              <span>Mercury</span>
            </li>
            <li data-pos="81" data-nb="204.38" className="type-7 cat-0">Tl
              <span>Thallium</span>
            </li>
            <li data-pos="82" data-nb="207.2" className="type-7 cat-0">Pb
              <span>Lead</span>
            </li>
            <li data-pos="83" data-nb="208.96" className="type-7 cat-0">Bi
              <span>Bismuth</span>
            </li>

            <li data-pos="84" data-nb="209" className="type-7 cat-0">Po
              <span>Polonium</span>
            </li>
            <li data-pos="85" data-nb="210" className="type-5 cat-0">At
              <span>Astatine</span>
            </li>
            <li data-pos="86" data-nb="222" className="type-2 cat-2">Rn
              <span>Radon</span>
            </li>

             {/*ROW 7*/}

            <li data-pos="87" data-nb="223" className="type-3 cat-0">Fr
              <span>Francium</span>
            </li>
            <li data-pos="88" data-nb="226" className="type-4 cat-0">Ra
              <span>Radium</span>
            </li>
            <li data-pos="89-103" className="type-9">Ac-Lr
              <span>Actinide</span>
            </li>
            <li data-pos="104" data-nb="261" className="type-6 cat-3">Rf
              <span>Rutherfodum</span>
            </li>
            <li data-pos="105" data-nb="262" className="type-6 cat-3">Db
              <span>Dubnium</span>
            </li>

            <li data-pos="106" data-nb="266" className="type-6 cat-3">Sg
              <span>Seaborgium</span>
            </li>
            <li data-pos="107" data-nb="264" className="type-6 cat-3">Bh
              <span>Bohrium</span>
            </li>
            <li data-pos="108" data-nb="277" className="type-6 cat-3">Hs
              <span>Hassium</span>
            </li>
            <li data-pos="109" data-nb="268" className="type-6 cat-3">Mt
              <span>Meitnerium</span>
            </li>
            <li data-pos="110" data-nb="281" className="type-6 cat-3">Ds
              <span>Damstadium</span>
            </li>

            <li data-pos="111" data-nb="272" className="type-6 cat-3">Rg
              <span>Roentgenium</span>
            </li>
            <li data-pos="112" data-nb="285" className="type-7 cat-3">Uub
              <span>Ununbium</span>
            </li>
            <li data-pos="113" data-nb="285" className="type-7 cat-3">Uut
              <span>Ununtrium</span>
            </li>
            <li data-pos="114" data-nb="289" className="type-7 cat-3">Uuq
              <span>Ununquadium</span>
            </li>
            <li data-pos="115" data-nb="289" className="type-7 cat-3">Uup
              <span>Ununpentium</span>
            </li>

            <li data-pos="115" data-nb="289" className="type-7 cat-3">Uuh
              <span>Ununhexium</span>
            </li>
            <li data-pos="115" data-nb="289" className="type-0 cat-3">Uus
              <span>Ununseptum</span>
            </li>
            <li data-pos="115" data-nb="289" className="type-2 cat-3">Uuo
              <span>Ununoctium</span>
            </li>


            {/*lanthinoides and actinoides */}
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>

            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>

            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>

            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>

            <li data-pos="57" data-nb="138.905" className="type-8 cat-0">La
              <span>Lanthanum</span>
            </li>
            <li data-pos="58" data-nb="140.116" className="type-8 cat-0">Ce
              <span>Cerium</span>
            </li>
            <li data-pos="59" data-nb="140.908" className="type-8 cat-0">Pr
              <span>Praseodymium</span>
            </li>
            <li data-pos="60" data-nb="144.242" className="type-8 cat-0">Nd
              <span>Neodymium</span>
            </li>
            <li data-pos="61" data-nb="144.913" className="type-8 cat-0">Pm
              <span>Promethium</span>
            </li>

            <li data-pos="62" data-nb="150.360" className="type-8 cat-0">Sm
              <span>Samarium</span>
            </li>


            <li data-pos="63" data-nb="151.964" className="type-8 cat-0">Eu
              <span>Europium</span>
            </li>
            <li data-pos="64" data-nb="157.250" className="type-8 cat-0">Gd
              <span>Gadolinium</span>
            </li>
            <li data-pos="65" data-nb="158.925" className="type-8 cat-0">Tb
              <span>Terbium</span>
            </li>
            <li data-pos="66" data-nb="162.500" className="type-8 cat-0">Dy
              <span>Dysprosium</span>
            </li>

            <li data-pos="67" data-nb="164.930" className="type-8 cat-0">Ho
              <span>Holmium</span>
            </li>
            <li data-pos="68" data-nb="167.259" className="type-8 cat-0">Er
              <span>Erbium</span>
            </li>
            <li data-pos="69" data-nb="168.934" className="type-8 cat-0">Tm
              <span>Thulium</span>
            </li>
            <li data-pos="70" data-nb="173.055" className="type-8 cat-0">Yb
              <span>Ytterbium</span>
            </li>
            <li data-pos="71" data-nb="174.967" className="type-8 cat-0">Lu
              <span>Lutetium</span>
            </li>

            <li className="empty"></li>
            <li className="empty"></li>

            <li className="empty"></li>
            <li data-pos="89" data-nb="227.028" className="type-9 cat-0">Ac
              <span>Actinium</span>
            </li>
            <li data-pos="90" data-nb="232.038" className="type-9 cat-0">Th
              <span>Thorium</span>
            </li>
            <li data-pos="91" data-nb="231.036" className="type-9 cat-0">Pa
              <span>Protactinium</span>
            </li>
            <li data-pos="92" data-nb="238.029" className="type-9 cat-0">U
              <span>Uranium</span>
            </li>
            <li data-pos="93" data-nb="237.048" className="type-9 cat-0">Np
              <span>Neptunium</span>
            </li>

            <li data-pos="94" data-nb="244.064" className="type-9 cat-0">Pu
              <span>Plutonium</span>
            </li>
            <li data-pos="95" data-nb="243.061" className="type-9 cat-0">Am
              <span>Americium</span>
            </li>
            <li data-pos="96" data-nb="247.070" className="type-9 cat-0">Cm
              <span>Curium</span>
            </li>
            <li data-pos="97" data-nb="247.070" className="type-9 cat-0">Bk
              <span>Berkelium</span>
            </li>
            <li data-pos="98" data-nb="251.080" className="type-9 cat-0">Cf
              <span>Californium</span>
            </li>

            <li data-pos="99" data-nb="254.000" className="type-9 cat-0">Es
              <span>Einsteinium</span>
            </li>
            <li data-pos="100" data-nb="257.095" className="type-9 cat-0">Fm
              <span>Fermium</span>
            </li>
            <li data-pos="101" data-nb="258.100" className="type-9 cat-0">Md
              <span>Mendelevium</span>
            </li>
            <li data-pos="102" data-nb="259.101" className="type-9 cat-0">No
              <span>Nobelium</span>
            </li>
            <li data-pos="103" data-nb="262.000" className="type-9 cat-0">Lr
              <span>Lawrencium</span>
            </li>
          </ul>

          <div className="legend">
            <ul className="list-1">
              <li className="cat-0">
                <span>C</span>Solid
              </li>
              <li className="cat-1">
                <span>Hg</span>Liquid
              </li>
              <li className="cat-2">
                <span>H</span>Gas
              </li>
              <li className="cat-3">
                <span>Rf</span>Unknown
              </li>
            </ul>

            <ul className="list-2">
              <li className="type-3">Alkadi metals</li>

              <li className="type-8">Lanthanoids</li>
              <li className="type-9">Actinoids</li>
              <li className="type-7">Poor metals</li>
            </ul>
            <ul className="list-2">
              <li className="type-2">Noble gases</li>
              <li className="type-6">Transition metals</li>
              <li className="type-5">Other non-metals</li>
              <li className="type-4">Alkadine earth metals</li>
            </ul>
          </div>
        </div>
      </section>
      <Text props={props.description} />
    </div>
  );
};

export default props => <GroupsPeriods {...props} />;


<?xml version="1.0" encoding="UTF-8"?>
<tileset name="Tiny32 Basic" tilewidth="16" tileheight="16" tilecount="256" columns="16">
 <image source="tileset-alt.png" width="256" height="256"/>
 <terraintypes>
  <terrain name="Grass" tile="31"/>
  <terrain name="Air" tile="156"/>
  <terrain name="Desert" tile="59"/>
  <terrain name="Carpet" tile="94"/>
 </terraintypes>
 <tile id="4">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="false"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="5">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="false"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="6">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="false"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="7">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="false"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="8">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="9">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="10">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="11">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="false"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="12">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="13">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="14">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="15">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="19">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="20">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="false"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="21">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="false"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="22">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="false"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="23">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="false"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="24">
  <animation>
   <frame tileid="4" duration="100"/>
   <frame tileid="5" duration="100"/>
   <frame tileid="6" duration="100"/>
   <frame tileid="7" duration="100"/>
  </animation>
 </tile>
 <tile id="25">
  <animation>
   <frame tileid="20" duration="100"/>
   <frame tileid="21" duration="100"/>
   <frame tileid="22" duration="100"/>
   <frame tileid="23" duration="100"/>
  </animation>
 </tile>
 <tile id="26" terrain="1,1,1,0"/>
 <tile id="27" terrain="1,1,0,1"/>
 <tile id="28" terrain="1,0,0,0"/>
 <tile id="29" terrain="0,1,0,0"/>
 <tile id="30" terrain="0,0,0,0" probability="0.8"/>
 <tile id="31" terrain="0,0,0,0" probability="0.075"/>
 <tile id="35">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="36">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="1" y="4" width="14" height="12">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="37">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="1" y="4" width="14" height="12">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="38">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="1" y="4" width="14" height="12">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="39">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="1" y="4" width="14" height="12">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="40">
  <animation>
   <frame tileid="36" duration="100"/>
   <frame tileid="37" duration="100"/>
   <frame tileid="38" duration="100"/>
   <frame tileid="39" duration="100"/>
  </animation>
 </tile>
 <tile id="42" terrain="1,0,1,1"/>
 <tile id="43" terrain="0,1,1,1"/>
 <tile id="44" terrain="0,0,1,0"/>
 <tile id="45" terrain="0,0,0,1"/>
 <tile id="46" terrain="0,0,0,0" probability="0.075"/>
 <tile id="47" terrain="0,0,0,0" probability="0.05"/>
 <tile id="51">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="9" width="16" height="7">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="52">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="2" y="4" width="12" height="12">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="53">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="2" y="4" width="12" height="12">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="54">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="false"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="55">
  <objectgroup draworder="index">
   <object id="1" x="0" y="6" width="16" height="9">
    <properties>
     <property name="block" type="bool" value="false"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="56">
  <animation>
   <frame tileid="52" duration="500"/>
   <frame tileid="53" duration="200"/>
   <frame tileid="54" duration="200"/>
   <frame tileid="55" duration="500"/>
  </animation>
 </tile>
 <tile id="59" terrain="2,2,2,2"/>
 <tile id="60" terrain="1,1,1,2"/>
 <tile id="61" terrain="1,1,2,1"/>
 <tile id="62" terrain=",2,2,2"/>
 <tile id="63" terrain="2,,2,2"/>
 <tile id="67">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="68">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="false"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="69">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="false"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="70">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="false"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="71">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="false"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="72">
  <objectgroup draworder="index">
   <object id="1" x="0" y="2" width="16" height="14">
    <properties>
     <property name="block" type="bool" value="false"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="73">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="false"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="76" terrain="1,2,1,1"/>
 <tile id="77" terrain="2,1,1,1"/>
 <tile id="78" terrain="2,2,,2"/>
 <tile id="79" terrain="2,2,2,"/>
 <tile id="80">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
  <animation>
   <frame tileid="81" duration="150"/>
   <frame tileid="80" duration="150"/>
   <frame tileid="81" duration="150"/>
   <frame tileid="82" duration="150"/>
  </animation>
 </tile>
 <tile id="81">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="82">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="93" terrain="3,3,3,3">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="false"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="94" terrain=",,,3">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="false"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="95" terrain=",,3,">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="false"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="96">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
  <animation>
   <frame tileid="97" duration="150"/>
   <frame tileid="96" duration="150"/>
   <frame tileid="97" duration="150"/>
   <frame tileid="98" duration="150"/>
  </animation>
 </tile>
 <tile id="97">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="98">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="100">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="107">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="108">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="110" terrain=",3,,">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="false"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="111" terrain="3,,,">
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="false"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="112">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
  <animation>
   <frame tileid="113" duration="150"/>
   <frame tileid="112" duration="150"/>
   <frame tileid="113" duration="150"/>
   <frame tileid="114" duration="150"/>
  </animation>
 </tile>
 <tile id="113">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="114">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="123">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="129">
  <animation>
   <frame tileid="128" duration="100"/>
   <frame tileid="129" duration="200"/>
   <frame tileid="128" duration="100"/>
   <frame tileid="130" duration="200"/>
  </animation>
 </tile>
 <tile id="132">
  <animation>
   <frame tileid="131" duration="100"/>
   <frame tileid="132" duration="200"/>
   <frame tileid="131" duration="100"/>
   <frame tileid="133" duration="200"/>
  </animation>
 </tile>
 <tile id="135">
  <animation>
   <frame tileid="134" duration="100"/>
   <frame tileid="135" duration="200"/>
   <frame tileid="134" duration="100"/>
   <frame tileid="136" duration="200"/>
  </animation>
 </tile>
 <tile id="138">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="139">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="140">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="141">
  <animation>
   <frame tileid="141" duration="400"/>
   <frame tileid="142" duration="100"/>
   <frame tileid="143" duration="300"/>
  </animation>
 </tile>
 <tile id="145">
  <animation>
   <frame tileid="144" duration="100"/>
   <frame tileid="145" duration="200"/>
   <frame tileid="144" duration="100"/>
   <frame tileid="146" duration="200"/>
  </animation>
 </tile>
 <tile id="148">
  <animation>
   <frame tileid="147" duration="100"/>
   <frame tileid="148" duration="200"/>
   <frame tileid="147" duration="100"/>
   <frame tileid="149" duration="200"/>
  </animation>
 </tile>
 <tile id="151">
  <animation>
   <frame tileid="150" duration="100"/>
   <frame tileid="151" duration="200"/>
   <frame tileid="150" duration="100"/>
   <frame tileid="152" duration="200"/>
  </animation>
 </tile>
 <tile id="155" terrain="1,1,1,1">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="156">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="157">
  <animation>
   <frame tileid="157" duration="400"/>
   <frame tileid="158" duration="100"/>
   <frame tileid="159" duration="300"/>
  </animation>
 </tile>
 <tile id="161">
  <animation>
   <frame tileid="160" duration="100"/>
   <frame tileid="161" duration="200"/>
   <frame tileid="160" duration="100"/>
   <frame tileid="162" duration="200"/>
  </animation>
 </tile>
 <tile id="164">
  <animation>
   <frame tileid="163" duration="100"/>
   <frame tileid="164" duration="200"/>
   <frame tileid="163" duration="100"/>
   <frame tileid="165" duration="200"/>
  </animation>
 </tile>
 <tile id="167">
  <animation>
   <frame tileid="166" duration="100"/>
   <frame tileid="167" duration="200"/>
   <frame tileid="166" duration="100"/>
   <frame tileid="168" duration="200"/>
  </animation>
 </tile>
 <tile id="171">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="172">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="173">
  <animation>
   <frame tileid="173" duration="400"/>
   <frame tileid="174" duration="100"/>
   <frame tileid="175" duration="300"/>
  </animation>
 </tile>
 <tile id="177">
  <animation>
   <frame tileid="176" duration="100"/>
   <frame tileid="177" duration="200"/>
   <frame tileid="176" duration="100"/>
   <frame tileid="178" duration="200"/>
  </animation>
 </tile>
 <tile id="180">
  <animation>
   <frame tileid="179" duration="100"/>
   <frame tileid="180" duration="200"/>
   <frame tileid="179" duration="100"/>
   <frame tileid="181" duration="200"/>
  </animation>
 </tile>
 <tile id="183">
  <animation>
   <frame tileid="182" duration="100"/>
   <frame tileid="183" duration="200"/>
   <frame tileid="182" duration="100"/>
   <frame tileid="184" duration="200"/>
  </animation>
 </tile>
 <tile id="189">
  <animation>
   <frame tileid="189" duration="400"/>
   <frame tileid="190" duration="100"/>
   <frame tileid="191" duration="300"/>
  </animation>
 </tile>
 <tile id="193">
  <animation>
   <frame tileid="192" duration="100"/>
   <frame tileid="193" duration="200"/>
   <frame tileid="192" duration="100"/>
   <frame tileid="194" duration="200"/>
  </animation>
 </tile>
 <tile id="196">
  <animation>
   <frame tileid="196" duration="100"/>
   <frame tileid="195" duration="100"/>
  </animation>
 </tile>
 <tile id="199">
  <animation>
   <frame tileid="199" duration="300"/>
   <frame tileid="198" duration="300"/>
  </animation>
 </tile>
 <tile id="202">
  <animation>
   <frame tileid="202" duration="100"/>
   <frame tileid="201" duration="100"/>
  </animation>
 </tile>
 <tile id="205">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="3" y="5" width="10" height="11">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
  <animation>
   <frame tileid="206" duration="150"/>
   <frame tileid="205" duration="150"/>
   <frame tileid="206" duration="150"/>
   <frame tileid="207" duration="150"/>
  </animation>
 </tile>
 <tile id="206">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="3" y="5" width="10" height="11">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="207">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="3" y="5" width="10" height="11">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="209">
  <animation>
   <frame tileid="208" duration="100"/>
   <frame tileid="209" duration="200"/>
   <frame tileid="208" duration="100"/>
   <frame tileid="210" duration="200"/>
  </animation>
 </tile>
 <tile id="212">
  <animation>
   <frame tileid="212" duration="100"/>
   <frame tileid="211" duration="100"/>
  </animation>
 </tile>
 <tile id="215">
  <animation>
   <frame tileid="215" duration="300"/>
   <frame tileid="214" duration="300"/>
  </animation>
 </tile>
 <tile id="218">
  <animation>
   <frame tileid="218" duration="100"/>
   <frame tileid="217" duration="100"/>
  </animation>
 </tile>
 <tile id="221">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="3" y="5" width="10" height="11">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
  <animation>
   <frame tileid="222" duration="150"/>
   <frame tileid="221" duration="150"/>
   <frame tileid="222" duration="150"/>
   <frame tileid="223" duration="150"/>
  </animation>
 </tile>
 <tile id="222">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="3" y="5" width="10" height="11">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="223">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="3" y="5" width="10" height="11">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="225">
  <animation>
   <frame tileid="224" duration="100"/>
   <frame tileid="225" duration="200"/>
   <frame tileid="224" duration="100"/>
   <frame tileid="226" duration="200"/>
  </animation>
 </tile>
 <tile id="228">
  <animation>
   <frame tileid="228" duration="100"/>
   <frame tileid="227" duration="100"/>
  </animation>
 </tile>
 <tile id="231">
  <animation>
   <frame tileid="231" duration="300"/>
   <frame tileid="230" duration="300"/>
  </animation>
 </tile>
 <tile id="234">
  <animation>
   <frame tileid="234" duration="100"/>
   <frame tileid="233" duration="100"/>
  </animation>
 </tile>
 <tile id="237">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="238">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="239">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="241">
  <animation>
   <frame tileid="240" duration="100"/>
   <frame tileid="241" duration="200"/>
   <frame tileid="240" duration="100"/>
   <frame tileid="242" duration="200"/>
  </animation>
 </tile>
 <tile id="244">
  <animation>
   <frame tileid="244" duration="100"/>
   <frame tileid="243" duration="100"/>
  </animation>
 </tile>
 <tile id="247">
  <animation>
   <frame tileid="247" duration="300"/>
   <frame tileid="246" duration="300"/>
  </animation>
 </tile>
 <tile id="250">
  <animation>
   <frame tileid="250" duration="100"/>
   <frame tileid="249" duration="100"/>
  </animation>
 </tile>
 <tile id="253">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="254">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="255">
  <properties>
   <property name="block" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="block" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <wangsets>
  <wangset name="Everything" tile="-1">
   <wangedgecolor name="Carpet" color="#ff0000" tile="-1" probability="1"/>
   <wangedgecolor name="Grass" color="#00ff00" tile="-1" probability="1"/>
   <wangedgecolor name="Nothing" color="#0000ff" tile="-1" probability="1"/>
   <wangedgecolor name="Sand" color="#ff7700" tile="-1" probability="1"/>
   <wangedgecolor name="Lava" color="#00e9ff" tile="-1" probability="1"/>
   <wangedgecolor name="Wall 1" color="#ff00d8" tile="-1" probability="1"/>
   <wangedgecolor name="Wall 2" color="#ffff00" tile="-1" probability="1"/>
   <wangtile tileid="8" wangid="0x6000600"/>
   <wangtile tileid="9" wangid="0x60006"/>
   <wangtile tileid="10" wangid="0x6000606"/>
   <wangtile tileid="11" wangid="0x6060600"/>
   <wangtile tileid="12" wangid="0x7000700"/>
   <wangtile tileid="13" wangid="0x70007"/>
   <wangtile tileid="14" wangid="0x7000707"/>
   <wangtile tileid="15" wangid="0x7070700"/>
   <wangtile tileid="26" wangid="0x20200"/>
   <wangtile tileid="27" wangid="0x2020000"/>
   <wangtile tileid="28" wangid="0x20200"/>
   <wangtile tileid="29" wangid="0x2020000"/>
   <wangtile tileid="30" wangid="0x2020202"/>
   <wangtile tileid="31" wangid="0x2020202"/>
   <wangtile tileid="42" wangid="0x202"/>
   <wangtile tileid="43" wangid="0x2000002"/>
   <wangtile tileid="44" wangid="0x202"/>
   <wangtile tileid="45" wangid="0x2000002"/>
   <wangtile tileid="46" wangid="0x2020202"/>
   <wangtile tileid="47" wangid="0x2020202"/>
   <wangtile tileid="59" wangid="0x4040404"/>
   <wangtile tileid="60" wangid="0x40400"/>
   <wangtile tileid="61" wangid="0x4040000"/>
   <wangtile tileid="62" wangid="0x40400"/>
   <wangtile tileid="63" wangid="0x4040000"/>
   <wangtile tileid="76" wangid="0x404"/>
   <wangtile tileid="77" wangid="0x4000004"/>
   <wangtile tileid="78" wangid="0x404"/>
   <wangtile tileid="79" wangid="0x4000004"/>
   <wangtile tileid="83" wangid="0x5000005"/>
   <wangtile tileid="84" wangid="0x5"/>
   <wangtile tileid="85" wangid="0x505"/>
   <wangtile tileid="87" wangid="0x5050505"/>
   <wangtile tileid="88" wangid="0x5050505"/>
   <wangtile tileid="93" wangid="0x1010101"/>
   <wangtile tileid="94" wangid="0x10100"/>
   <wangtile tileid="95" wangid="0x1010000"/>
   <wangtile tileid="99" wangid="0x5000000"/>
   <wangtile tileid="101" wangid="0x500"/>
   <wangtile tileid="110" wangid="0x101"/>
   <wangtile tileid="111" wangid="0x1000001"/>
   <wangtile tileid="115" wangid="0x5050000"/>
   <wangtile tileid="116" wangid="0x50000"/>
   <wangtile tileid="117" wangid="0x50500"/>
  </wangset>
 </wangsets>
</tileset>

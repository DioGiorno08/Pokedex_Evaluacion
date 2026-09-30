import React from "react";
import Svg, {
  Circle,
  Ellipse,
  Path,
  Defs,
  RadialGradient,
  Stop,
  G,
  Text as SvgText,
} from "react-native-svg";
export function MasterBall({ size = 40 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <Circle cx="50" cy="50" r="45" fill="#EDE5FA" />
      <Path d="M5 50 A45 45 0 0 1 95 50Z" fill="#9160D6" />
      <Ellipse
        cx="20"
        cy="29"
        rx="10"
        ry="14"
        fill="#EF92D0"
        rotation="35 20 29"
      />
      <Ellipse
        cx="80"
        cy="29"
        rx="10"
        ry="14"
        fill="#EF92D0"
        rotation="-35 80 29"
      />
      <SvgText
        x="50"
        y="36"
        fill="white"
        textAnchor="middle"
        fontWeight="bold"
        fontSize="25"
      >
        M
      </SvgText>
      <Path d="M5 50H95" stroke="#281D3C" strokeWidth="8" />
      <Circle cx="50" cy="50" r="14" fill="#281D3C" />
      <Circle cx="50" cy="50" r="9" fill="white" />
      <Circle cx="50" cy="50" r="4" fill="#DED1F3" />
    </Svg>
  );
}
export function MewtwoArt() {
  return (
    <Svg
      width="100%"
      height={260}
      viewBox="0 0 360 300"
      accessibilityLabel="Ilustración de Mewtwo rodeado de energía violeta"
    >
      <Defs>
        <RadialGradient id="aura">
          <Stop offset="0" stopColor="#9A5AE9" stopOpacity=".5" />
          <Stop offset="1" stopColor="#9A5AE9" stopOpacity="0" />
        </RadialGradient>
      </Defs>
      <Circle cx="180" cy="150" r="148" fill="url(#aura)" />
      <Circle
        cx="180"
        cy="155"
        r="108"
        fill="none"
        stroke="#8560AD"
        strokeOpacity=".3"
      />
      <Ellipse
        cx="180"
        cy="162"
        rx="146"
        ry="56"
        fill="none"
        stroke="#AD82E0"
        strokeOpacity=".25"
        rotation="-26 180 162"
      />
      <Path
        d="M199 212 C296 291 338 146 283 158 C250 164 286 233 212 189"
        fill="none"
        stroke="#9D62CE"
        strokeWidth="23"
        strokeLinecap="round"
      />
      <G fill="#D9D0EC" stroke="#B8A6D3" strokeWidth="2">
        <Path d="M157 174 Q137 196 133 232 L112 262 Q110 270 124 269 L151 258 L173 220 L188 194Z" />
        <Path d="M190 183 Q219 197 221 226 L242 254 Q249 266 234 267 L214 255 L185 220 L170 199Z" />
        <Path d="M172 116 Q147 142 158 179 Q159 204 183 204 Q210 202 205 175 L194 126Z" />
        <Path d="M162 130 Q146 125 132 143 L111 165 L85 157 Q72 157 79 168 L107 180 Q116 183 124 175 L159 153Z" />
        <Path d="M195 132 Q216 137 224 115 L236 92 Q244 84 248 94 L242 120 Q232 152 207 155Z" />
        <Path d="M154 87 L151 48 L169 64 Q182 60 194 65 L213 50 L208 91 Q206 117 186 123 Q158 119 154 87Z" />
      </G>
      <Path
        d="M169 156 Q192 148 195 179 Q193 200 180 200 Q164 192 169 156"
        fill="#AC83CC"
      />
      <Path d="M160 87L177 93L167 97Z M199 87L184 93L194 97Z" fill="#683593" />
      <Path
        d="M174 108Q184 112 191 106"
        fill="none"
        stroke="#8E78A6"
        strokeWidth="2"
      />
      <Circle cx="248" cy="75" r="19" fill="#CBAAFF" fillOpacity=".18" />
      <Circle cx="248" cy="75" r="8" fill="#DDC8FF" />
      <Path
        d="M62 93H74 M68 87V99 M281 229H291 M286 224V234"
        stroke="#D0AFF9"
        strokeWidth="2"
      />
    </Svg>
  );
}

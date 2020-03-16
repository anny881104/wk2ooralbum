import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import albumData from "../json/albums";

const Albumlist = () => {
  return (
    <ScrollView>

          <Image
            style={styles.bigimage}
            source={{
              uri: "https://pbs.twimg.com/media/CZRDDllVIAArUFJ.jpg"
            }}
          />

<View style={styles.container}>

     <View style={styles.bandtextbox}>
       <Text style={styles.bandtext}> VOCALS : TAKA , BORN ON  1988.4.17 / TOKYO </Text>
       <Text style={styles.bandtext}> GUITARS : TORU , BORN ON  1988.12.7 / OSAKA </Text>
       <Text style={styles.bandtext}> BASS : RYOTA , BORN ON  1989.9.4 / OSAKA </Text>
       <Text style={styles.bandtext}> DRUMS : TOMOYA , BORN ON  1987.6.27 / HYOGO </Text>
     </View>
     
       <View style={styles.bigtextbox}>
       <Text style={styles.bigtext}> A.l.b.u.m.s. </Text>
     </View>
       
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[0].thumbnail_image
             }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albumData[0].title}</Text>
            <Text>{albumData[0].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[0].image
            }}
          />
        </View>
      </View>
      <View style={styles.textbox}>
      <Text style={styles.textStyle}> 1.Eye Of The Storm  </Text>
      <Text style={styles.textStyle}> 2.Stand Out Fit In </Text>
      <Text style={styles.textStyle}> 3.Head High  </Text>
      <Text style={styles.textStyle}> 4.Grow Old Die Young  </Text>
      <Text style={styles.textStyle}> 5.Push Back  </Text>
      <Text style={styles.textStyle}> 6.Wasted Nights </Text>
      <Text style={styles.textStyle}> 7.Change </Text>
      <Text style={styles.textStyle}> 8.Letting Go </Text>
      <Text style={styles.textStyle}> 9.Worst In Me  </Text>
      <Text style={styles.textStyle}> 10.In The Stars (feat. Kiiara)</Text>
      <Text style={styles.textStyle}> 11.Unforgettable</Text>
      <Text style={styles.textStyle}> 12.The Last Time</Text>
      </View>
      
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[1].thumbnail_image
             }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albumData[1].title}</Text>
            <Text>{albumData[1].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[1].image
            }}
          />
        </View>
      </View>
      <View style={styles.textbox}>
      <Text style={styles.textStyle}> 1.Change </Text>
      </View>
      
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[2].thumbnail_image
             }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albumData[2].title}</Text>
            <Text>{albumData[2].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[2].image
            }}
          />
        </View>
      </View>
      <View style={styles.textbox}>
      <Text style={styles.textStyle}> 1.Ambitions (Introduction) </Text>
      <Text style={styles.textStyle}> 2.Bombs Away </Text>
      <Text style={styles.textStyle}> 3.Taking Off  </Text>
      <Text style={styles.textStyle}> 4.We Are </Text>
      <Text style={styles.textStyle}> 5.Jaded (feat. Alex Gaskarth) </Text>
      <Text style={styles.textStyle}> 6.Hard To Love</Text>
      <Text style={styles.textStyle}> 7.Bedroom Warfare</Text>
      <Text style={styles.textStyle}> 8.American Girls </Text>
      <Text style={styles.textStyle}> 9.I Was King </Text>
      <Text style={styles.textStyle}> 10.Listen</Text>
      <Text style={styles.textStyle}> 11.One Way Ticket</Text>
      <Text style={styles.textStyle}> 12.Bon Voyage</Text>
      <Text style={styles.textStyle}> 11.Start Again</Text>
      <Text style={styles.textStyle}> 12.Take What You Want (feat. 5 Seconds of Summer)</Text>
      </View>
      
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[3].thumbnail_image
             }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albumData[3].title}</Text>
            <Text>{albumData[3].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[3].image
            }}
          />
        </View>
      </View>
      <View style={styles.textbox}>
      <Text style={styles.textStyle}> 1.3xxxv5 </Text>
      <Text style={styles.textStyle}> 2.Take Me To The Top </Text>
      <Text style={styles.textStyle}> 3.Cry Out </Text>
      <Text style={styles.textStyle}> 4.Suddenly </Text>
      <Text style={styles.textStyle}> 5.Mighty Long Fall   </Text>
      <Text style={styles.textStyle}> 6.Heartache </Text>
      <Text style={styles.textStyle}> 7.Memories  </Text>
      <Text style={styles.textStyle}> 8.Decision </Text>
      <Text style={styles.textStyle}> 9.Paper Planes </Text>
      <Text style={styles.textStyle}> 10.Good Goodbye</Text>
      <Text style={styles.textStyle}> 11.One By One</Text>
      <Text style={styles.textStyle}> 12.Stuck In The Middle </Text>
      <Text style={styles.textStyle}> 13.Fight The Night</Text>
      <Text style={styles.textStyle}> 14.Last Dance </Text>
      <Text style={styles.textStyle}> 15.The Way Back </Text>
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[4].thumbnail_image
             }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albumData[4].title}</Text>
            <Text>{albumData[4].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[4].image
            }}
          />
        </View>
      </View>
      <View style={styles.textbox}>
      <Text style={styles.textStyle}> 1.Introduction～Where idiot should go～ </Text>
      <Text style={styles.textStyle}> 2.Ending Story??</Text>
      <Text style={styles.textStyle}> 3ONION! </Text>
      <Text style={styles.textStyle}> 4.The Beginning  </Text>
      <Text style={styles.textStyle}> 5.Clock Strikes</Text>
      <Text style={styles.textStyle}> 6.Be the light </Text>
      <Text style={styles.textStyle}> 7.Nothing Helps</Text>
      <Text style={styles.textStyle}> 8.Juvenile</Text>
      <Text style={styles.textStyle}> 9.All Mine </Text>
      <Text style={styles.textStyle}> 10.Smiling down</Text>
      <Text style={styles.textStyle}> 11.Deeper Deeper</Text>
      <Text style={styles.textStyle}> 12.69</Text>
      <Text style={styles.textStyle}> 13.the same as…</Text>
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[5].thumbnail_image
             }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albumData[5].title}</Text>
            <Text>{albumData[5].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[5].image
            }}
          />
        </View>
      </View>
      <View style={styles.textbox}>
      <Text style={styles.textStyle}> 1.Coda</Text>
      <Text style={styles.textStyle}> 2.LOST AND FOUND </Text>
      <Text style={styles.textStyle}> 3.アンサイズニア </Text>
      <Text style={styles.textStyle}> 4.NO SCARED </Text>
      <Text style={styles.textStyle}> 5.C.h.a.o.s.m.y.t.h. </Text>
      <Text style={styles.textStyle}> 6.Mr.現代Speaker</Text>
      <Text style={styles.textStyle}> 7.世間知らずの宇宙飛行士 </Text>
      <Text style={styles.textStyle}> 8.Re:make</Text>
      <Text style={styles.textStyle}> 9.Pierce </Text>
      <Text style={styles.textStyle}> 10.Let's take it someday</Text>
      <Text style={styles.textStyle}> 11.キミシダイ列車</Text>
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[6].thumbnail_image
             }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albumData[6].title}</Text>
            <Text>{albumData[6].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[6].image
            }}
          />
        </View>
      </View>
      <View style={styles.textbox}>
      <Text style={styles.textStyle}> 1.Introduction </Text>
      <Text style={styles.textStyle}> 2.Never Let This Go </Text>
      <Text style={styles.textStyle}> 3.完全感覚Dreamer </Text>
      <Text style={styles.textStyle}> 4.混雑コミュニケーション</Text>
      <Text style={styles.textStyle}> 5.Yes I am</Text>
      <Text style={styles.textStyle}> 6.Shake it down</Text>
      <Text style={styles.textStyle}> 7.じぶんROCK </Text>
      <Text style={styles.textStyle}> 8.Liar </Text>
      <Text style={styles.textStyle}> 9.Wherever you are </Text>
      <Text style={styles.textStyle}> 10.Riot!!!</Text>
      <Text style={styles.textStyle}> 11.アダルトスーツ</Text>
      <Text style={styles.textStyle}> 12.アダルトスーツ</Text>
      <Text style={styles.textStyle}> 13.Nobody's Home</Text>
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[7].thumbnail_image
             }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albumData[7].title}</Text>
            <Text>{albumData[7].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[7].image
            }}
          />
        </View>
      </View>
      <View style={styles.textbox}>
      <Text style={styles.textStyle}> 1.恋ノアイボウ心ノクピド</Text>
      <Text style={styles.textStyle}> 2.どっぺるゲンガー </Text>
      <Text style={styles.textStyle}> 3.皆無 </Text>
      <Text style={styles.textStyle}> 4.20 years old  </Text>
      <Text style={styles.textStyle}> 5.Living Dolls </Text>
      <Text style={styles.textStyle}> 6.Break My Strings </Text>
      <Text style={styles.textStyle}> 7.存在証明 </Text>
      <Text style={styles.textStyle}> 8.CONVINCING </Text>
      <Text style={styles.textStyle}> 9.My sweet baby</Text>
      <Text style={styles.textStyle}> 10.Reflection</Text>
      <Text style={styles.textStyle}> 11.Viva Violent Fellow～美しきモッシュピット</Text>
      <Text style={styles.textStyle}> 12.JUST</Text>
      </View>
      

      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[8].thumbnail_image
             }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albumData[8].title}</Text>
            <Text>{albumData[8].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[8].image
            }}
          />
        </View>
      </View>
      <View style={styles.textbox}>
      <Text style={styles.textStyle}> 1.必然メーカー </Text>
      <Text style={styles.textStyle}> 2.Melody Lineの死亡率 </Text>
      <Text style={styles.textStyle}> 3.100%(hundred percent) </Text>
      <Text style={styles.textStyle}> 4.Abduction-Interlude  </Text>
      <Text style={styles.textStyle}> 5.燦さん星  </Text>
      <Text style={styles.textStyle}> 6.光芒 </Text>
      <Text style={styles.textStyle}> 7.Crazy Botch </Text>
      <Text style={styles.textStyle}> 8.Yap </Text>
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[9].thumbnail_image
             }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albumData[9].title}</Text>
            <Text>{albumData[9].artist}</Text>
            
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[9].image
            }}
          />
        </View>
      </View>
      <View style={styles.textbox}>
      <Text style={styles.textStyle}> 1.内秘心書 </Text>
      <Text style={styles.textStyle}> 2.Borderline </Text>
      <Text style={styles.textStyle}> 3.(you can do)everything  </Text>
      <Text style={styles.textStyle}> 4.夜にしか咲かない満月  </Text>
      <Text style={styles.textStyle}> 5.努努-ゆめゆめ- </Text>
      <Text style={styles.textStyle}> 6.カゲロウ </Text>
      <Text style={styles.textStyle}> 7.Lujo </Text>
      <Text style={styles.textStyle}> 8.ケムリ </Text>
      <Text style={styles.textStyle}> 9.欲望に満ちた青年団 </Text>
      <Text style={styles.textStyle}> 10.エトセトラ</Text>
      <Text style={styles.textStyle}> 11.A new one for all,All for the new one</Text>
      </View>


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
 
  container:{
    flex: 1,
    backgroundColor:"#0B1013",
  },
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  textbox:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15
  },
  textStyle: {
    fontSize: 12,
    color:'#ddd',
    paddingBottom:5
  },
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#ddd",
    borderColor: '#000',
    borderBottomWidth: 2
  },
  imageStyle: {
    height: 300,
    width: null
  },
  bigimage:{
    height: 300,
    width: null
  },
  bigtextbox:{
    justifyContent: "center",
    alignItems: "center",
    marginTop:20
  },
  bigtext:{
    fontSize: 18,
    fontWeight:"bold",
    color:'#F3DF35',
  },
  bandtextbox:{
    justifyContent: "center",
    alignItems: "center",
    marginTop:25
  },
  bandtext:{
    fontSize: 12,
    fontWeight:"bold",
    color:'#ddd',
    paddingBottom:5
  }
});

export default Albumlist;

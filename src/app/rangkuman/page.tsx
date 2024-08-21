import { List, ListItem, Anchor } from "@mantine/core";
import NextLink from "next/link";
import { IconBrandX } from "@tabler/icons-react";
import { DefaultContainer } from "@/components/container";

export default function Rangkuman() {
  return (
    <DefaultContainer className="pr-6 space-y-4">
      <h2 className="font-bold text-3xl">Rangkuman</h2>

      <div className="flex items-center">
        <p>Sumber: </p>

        <IconBrandX size={18} className="ml-2 mr-1" />
        <Anchor
          component={NextLink}
          underline="always"
          href="https://x.com/ardisatriawan/status/1826054580813312397"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ardisatriawan
        </Anchor>
      </div>

      <List listStyleType="number" spacing={8}>
        <ListItem>
          PKS awalnya mau calonin Anies-Sohibul Iman, Jakarta "Aman".
          Elektabilitasnya paling tinggi. Problemnya: perlu threshold 20% biar
          bisa calonin gubernur. Jadi perlu cari partai koalisi biar cukup
          menuhinnya.
        </ListItem>
        <ListItem>
          Partai koalisi awalnya rencananya sama kaya Pilpres Kemarin: PKB, PKS,
          dan Nasdem.
        </ListItem>
        <ListItem>
          Koalisi Indonesia Maju (KIM) ngajakin PKB, PKS, dan Nasdem ke koalisi
          mereka. Kata berita:
          <List withPadding listStyleType="disc" mt={4}>
            <ListItem>NasDem dikasih ancaman kasus,</ListItem>
            <ListItem>
              Cak Iminnya PKB diancam lengser via konflik PKB-PBNU,
            </ListItem>
            <ListItem>
              PKS ditawari posisi, yang udah jelas adalah wakil gubernur.
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          PKS ngumumin calon mereka ganti jadi Ridwan Kamil - Suswono, dengan
          koalisi raksasa total 12 partai.
        </ListItem>
        <ListItem>
          Di luar keributan partai, ada calon independen: Dharma Pongrekun - Kun
          Wardana. Mereka juga problematik:
          <List withPadding listStyleType="disc" mt={4}>
            <ListItem>
              Ngumpulin KTP-nya pakai data curian, bahkan sampai ada anaknya
              Anies diklaim dukung mereka,
            </ListItem>
            <ListItem>
              Warga prottes, pencurian data-nya udah dilaporkan ke Polisi,
            </ListItem>
            <ListItem>
              Polisi menghentikan kasus pencurian datanya, katanya ini wewenang
              Bawaslu karena urusan Pilkada,
            </ListItem>
            <ListItem>
              Padahal pencurian data itu tindak pidana umum, mestinya Polisi dan
              Bawaslu dua-duanya bisa jalan.
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          KPU tetap menetapkan calon independen problematik ini.
        </ListItem>
        <ListItem>
          Presiden reshuffle kabinet: Menkumham Yasonna (PDIP) dicopot. Ingat:
          PDI-P belum ngumumin calon mereka.
          <List withPadding listStyleType="disc" mt={4}>
            <ListItem>Mereka juga terganjal threshold 20%.</ListItem>
          </List>
        </ListItem>
        <ListItem>
          Mahkamah Konstitusi, membuat keputusan penting:
          <List withPadding listStyleType="disc" mt={4}>
            <ListItem>
              Membatalkan Perubahan Batas Usia calon kepala daerah yang kemarin
              ramai dari Mahkamah Agung.
            </ListItem>
            <ListItem>
              Mengabulkan gugatan Partai Buruh dan Gelora: Threshold dari 20%
              jadi 7.5%.
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          Implikasinya:
          <List withPadding listStyleType="disc" mt={4}>
            <ListItem>
              Beberapa partai lain (misal PDI-P dan PSI) bisa calonin sendiri
              tanpa perlu cari teman,
            </ListItem>
            <ListItem>Kaesang gak bisa nyalon di Pilkada.</ListItem>
          </List>
        </ListItem>
        <ListItem>
          Presiden langsung panggil Menkumham baru, ingat dia udah bukan orang
          PDI-P, tapi orang baru. Entah mau ngapain.
        </ListItem>
        <ListItem>
          Hari ini DPR bakal rapat RUU Pilkada. Agendanya bikin pembahasan,
          kalau bisa sampai keputusan, hari ini juga.
          <List withPadding listStyleType="disc" mt={4}>
            <ListItem>
              Diduga untuk menganulir putusan MK dengan bikin UU,
            </ListItem>
            <ListItem>
              Deadline pendaftaran calon kepala daerah tinggal 9 hari kalender/7
              hari kerja lagi, udah mepet.
            </ListItem>
          </List>
        </ListItem>
      </List>
    </DefaultContainer>
  );
}

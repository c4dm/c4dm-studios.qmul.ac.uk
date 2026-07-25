<div class='markdown'> <!-- for scss styling -->

# Audio Network (AVB)

Our audio system uses an AVB network, with Dante and MADI bridges for compatibility with other formats. All devices are connected through the network, and audio routes are configured centrally in Milan Manager rather than being defined by fixed physical connections. This section provides documentation on software installation, endpoint configuration, audio channel and stream Assignments, audio routing within Milan Manager, and the configuration and operation of the format bridges.

<details><summary>Step 1:  Software Installation</summary>

Within each of our studio spaces, we have an [RME Digiface AVB](https://rme-audio.de/digiface-avb.html) installed.
These Digiface AVB devices act as hardware endpoints across our audio network, and once connected to, can be used to receive and send audio from anywhere within the studios.
These audio interfaces have been preconfigured on all of our in-house computers, and can also be configured for use on a personal laptop.

### Required Software

- [RME DriverKit for Digiface AVB](https://rme-audio.de/downloads.html) - Audio Interface Driver & AVB Protocol Support
- [Milan Manager](https://milanmanager.com/#downloads) - Audio Matrix Control

To correctly install the required software, please follow the step by step instructions below.

- Navigate to [RME's website](https://rme-audio.de/downloads.html) to download the RME DriverKit.
- Select Digiface AVB from the left menu, followed by your operating system.
- Download and install the latest audio driver (_driver_usbdk_mac_xxx.zip_ for MacOS or _driver_madiface_win_xxx.zip_ for Windows).
- (MacOS) Also from the RME downloads page, separately download and install the RME AVB Controller (_rme_avb_package_mac.zip_).
- (MacOS) <mark>Warning</mark> When installing the RME DriverKit, you must ensure you properly [enable your privacy settings](https://rme-audio.de/rme-macos.html).
  Depending on the device and operating system, this includes _Kernel Extensions_ and _Login Items_, as well as the more general _Privacy & Security_ permissions which block applications from running.
  Be patient, read the documentation carefully, and restart your device liberally.
- (Windows) Download and install the RME Windows Network Driver (_driver_win_net_xxx.zip_).
- (Windows) Download and install the network packet capture library [npcap](https://npcap.com).
- Finally, download and install [Milan Manager](https://milanmanager.com/#downloads).

### Optional Software

- [RME TotalMix](https://rme-audio.de/totalmix-fx.html) - Virtual Mixing Console
- [RME Connector](https://rme-audio.de/rme-connector.html) - Remote Hardware Control
- [RME DigiCheck NG](https://rme-audio.de/digicheck.html) - Real-Time Signal Analyser

### Linux Support

Unfortunately, our audio network has limited software compatibility on Linux.
An operable framework can however be configured using [ALSA](https://www.alsa-project.org/wiki/Main_Page) to interface directly with our AVB hardware devices, by declaring your Linux machine as a [Milan compatible](https://avnu.org/resource/milan-specification/) AVB endpoint.
You can then use the software [Hive](https://github.com/christophe-calmejane/Hive) to configure our AVB audio matrix.

</details>

<details><summary>Step 2: Digiface Configuration</summary>

### RME Digiface AVB

The first time you connect to an RME Digiface AVB, even if you have connected to one in a different studio room, you must follow these steps.

WINDOWS - you have to enable WDM devices each time you connect to a Digiface AVB. I have a screenshot of this on Sim's laptop

![digiface windows](/images/documentation/rme-digiface-windows.png)

</details>

<details><summary>Step 3: Audio Routing in Milan Manager</summary>

Studio users only need to interact with the **Overview** tab in Milan Manager to manage their audio routes. If multiple users are working in different rooms simultaneously, their connections will also be displayed in this window. Users should ensure that they do not alter any connections unrelated to their work, as this may disrupt other users’ sessions.

If users experience clocking issues, they can navigate to the Devices tab to reassign the Plant Room’s internal clock source as the master clock for the entire network. This is the Assignment configuration and should remain set to a 48 kHz sample rate.

See the official [**Milan Manager Documentation**](https://docs.milanmanager.com/ui-overview.html) for further instruction.

</details>

<details><summary> AVB Channel Map</summary>

### Control Room

## Talker Streams

<table><tbody>
	<tr>
		<td><b> Stream </b></td>
		<td><b> Name </b></td>
		<td><b> Channel </b></td>
		<td><b> Assignment </b></td>
	</tr>
	<tr>
		<td rowspan='2'> 1 </td>
		<td rowspan='2'> RME 12Mic </td>
		<td> 1 - 12 </td>
		<td> RME 12Mic </td>
	</tr>
	<tr>
		<td> 13 - 16 </td>
		<td> - </td>
	</tr>
	<tr>
		<td rowspan='2'> 2 </td>
		<td rowspan='2'> AD Inputs 1-16 </td>
		<td> 1 - 8 </td>
		<td> ISA 828 A </td>
	</tr>
	<tr>
		<td> 9 - 16 </td>
		<td> ISA 828 B </td>
	</tr>
	<tr>
		<td rowspan='7'> 3 </td>
		<td rowspan='7'> AD Inputs 17-32 </td>
		<td> 1 </td>
		<td> Distressor A</td>
	</tr>
	<tr>
		<td> 2 </td>
		<td> Distressor B </td>
	</tr>
	<tr>
		<td> 3 - 4 </td>
		<td> 33609 </td>
	</tr>
	<tr>
		<td> 5 - 6 </td>
		<td> Smart C2 </td>
	</tr>
	<tr>
		<td> 7 </td>
		<td> Tube-Tech </td>
	</tr>
	<tr>
		<td> 8 </td>
		<td> - </td>
	</tr>
	<tr>
		<td> 9 - 16 </td>
		<td> - </td>
	</tr>
	<tr><td> 4 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr><td> 5 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr><td> 6 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr><td> 7 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr>
		<td rowspan='2'> 8 </td>
		<td rowspan='2'> Talkback </td>
		<td> 1 </td>
		<td> Talkback </td>
	</tr>
	<tr>
		<td> 2 - 16 </td>
		<td> - </td>
	</tr>
</tbody></table>

## Listener Streams

<table><tbody>
	<tr>
		<td><b> Stream </b></td>
		<td><b> Name </b></td>
		<td><b> Channel </b></td>
		<td><b> Assignment </b></td>
	</tr>
	<tr>
		<td rowspan='2'> 1 </td>
		<td rowspan='2'> DA Outputs 1-16 </td>
		<td> 1 - 2 </td>
		<td> Monitor Controller </td>
	</tr>
	<tr>
		<td> 3 - 16 </td>
		<td> Patch Bay </td>
	</tr>
	<tr>
		<td rowspan='2'> 2 </td>
		<td rowspan='2'> DA Outputs 17-32 </td>
		<td> 1 - 8 </td>
		<td> Patch Bay </td>
	</tr>
	<tr>
		<td> 9 - 16 </td>
		<td> - </td>
	</tr>
	<tr><td> 4 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr><td> 5 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr><td> 6 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr><td> 7 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr><td> 8 </td><td> - </td><td> - </td><td> - </td></tr>
</tbody></table>

### Live Room

## Talker Streams

<table><tbody>
	<tr>
		<td><b> Stream </b></td>
		<td><b> Name </b></td>
		<td><b> Channel </b></td>
		<td><b> Assignment </b></td>
	</tr>
	<tr>
		<td rowspan='2'> 1 </td>
		<td rowspan='2'> RME 12Mic </td>
		<td> 1 - 12 </td>
		<td> RME 12Mic </td>
	</tr>
	<tr>
		<td> 13 - 16 </td>
		<td> - </td>
	</tr>
	<tr>
		<td rowspan='2'> 2 </td>
		<td rowspan='2'> AD Inputs 1-16 </td>
		<td> 1 - 2 </td>
		<td> TSL Ambisonic Microphone </td>
	</tr>
	<tr>
		<td> 3 - 16 </td>
		<td> AD Inputs </td>
	</tr>
	<tr>
		<td rowspan='1'> 3 </td>
		<td rowspan='1'> AD Inputs 17-24 </td>
		<td> 1 - 16 </td>
		<td> - </td>
	</tr>
	<tr><td> 4 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr><td> 5 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr><td> 6 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr><td> 7 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr><td> 8 </td><td> - </td><td> - </td><td> - </td></tr>
</tbody></table>

## Listener Streams

<table><tbody>
	<tr>
		<td><b> Stream </b></td>
		<td><b> Name </b></td>
		<td><b> Channel </b></td>
		<td><b> Assignment </b></td>
	</tr>
	<tr>
		<td rowspan='2'> 1 </td>
		<td rowspan='2'> DA Outputs 1-16 </td>
		<td> 1 - 2 </td>
		<td> Drawmer Monitor Controller </td>
	</tr>
	<tr>
		<td> 3 - 16 </td>
		<td> XLR Patch Bay </td>
	</tr>
	<tr>
		<td rowspan='2'> 2 </td>
		<td rowspan='2'> DA Outputs 17-24 </td>
		<td> 1 - 8 </td>
		<td> XLR Patch Bay </td>
	</tr>
	<tr>
		<td> 9 - 16 </td>
		<td> - </td>
	</tr>
	<tr><td> 4 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr><td> 5 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr><td> 6 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr><td> 7 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr>
		<td rowspan='2'> 8 </td>
		<td rowspan='2'> SPAT 1-12 </td>
		<td> 1 - 12 </td>
		<td> Ambisonic Speakers </td>
	</tr>
	<tr>
		<td> 13 - 16 </td>
		<td> - </td>
	</tr>
</tbody></table>

### Performance Lab

## Talker Streams

<table><tbody>
	<tr>
		<td><b> Stream </b></td>
		<td><b> Name </b></td>
		<td><b> Channel </b></td>
		<td><b> Assignment </b></td>
	</tr>
	<tr>
		<td rowspan='2'> 1 </td>
		<td rowspan='2'> RME 12MIC </td>
		<td> 1 - 12 </td>
		<td> 12Mic Inputs </td>
	</tr>
	<tr>
		<td> 13 - 16 </td>
		<td> N.C </td>
	</tr>
	<tr>
		<td rowspan='2'> 2 </td>
		<td rowspan='2'> AD Inputs 1-16 </td>
		<td> 1 - 2 </td>
		<td> TSL Ambisonic Microphone </td>
	</tr>
	<tr>
		<td> 3 - 16 </td>
		<td> AD Inputs </td>
	</tr>
	<tr>
		<td rowspan='1'> 3 </td>
		<td rowspan='1'> AD Inputs 17-24 </td>
		<td> 1 - 16 </td>
		<td> - </td>
	</tr>
	<tr><td> 4 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr><td> 5 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr><td> 6 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr><td> 7 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr><td> 8 </td><td> - </td><td> - </td><td> - </td></tr>
</tbody></table>

## Listener Streams

<table><tbody>
	<tr>
		<td><b> Stream </b></td>
		<td><b> Name </b></td>
		<td><b> Channel </b></td>
		<td><b> Assignment </b></td>
	</tr>
	<tr>
		<td rowspan='2'> 1 </td>
		<td rowspan='2'> DA Outputs 1-16 </td>
		<td> 1 - 2 </td>
		<td> Audient Monitor Controller </td>
	</tr>
	<tr>
		<td> 3 - 16 </td>
		<td> XLR Patch Bay </td>
	</tr>
	<tr>
		<td rowspan='2'> 2 </td>
		<td rowspan='2'> DA Outputs 17-24 </td>
		<td> 1 - 8 </td>
		<td> XLR Patch Bay </td>
	</tr>
	<tr>
		<td> 9 - 16 </td>
		<td> - </td>
	</tr>
	<tr><td> 4 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr><td> 5 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr><td> 6 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr><td> 7 </td><td> - </td><td> - </td><td> - </td></tr>
	<tr>
		<td rowspan='1'> 8 </td>
		<td rowspan='1'> SPAT 1-16 </td>
		<td> 1 - 16 </td>
		<td> Ambisonic Speakers </td>
	</tr>
</tbody></table>

### Plant Room

## Talker Streams

<table><tbody>
	<tr>
		<td><b> Stream </b></td>
		<td><b> Name </b></td>
		<td><b> Channel </b></td>
		<td><b> Assignment </b></td>
	</tr>
	<tr><td> 1 </td><td> MADIFACE 1-16 </td><td> 1 - 16 </td><td> MADIFACE OUT 1-16 </td></tr>
	<tr><td> 2 </td><td> MADIFACE 17-32 </td><td> 1 - 16 </td><td> MADIFACE OUT 17-32 </td></tr>
	<tr><td> 3 </td><td> MADIFACE 33-48 </td><td> 1 - 16 </td><td> MADIFACE OUT 33-48 </td></tr>
	<tr><td> 4 </td><td> MADIFACE 49-64 </td><td> 1 - 16 </td><td> MADIFACE OUT 49-64 </td></tr>
	<tr><td> 5 </td><td> DANTE 1-16 </td><td> 1 - 16 </td><td> DANTE OUT 1-16 </td></tr>
	<tr><td> 6 </td><td> DANTE 17-32 </td><td> 1 - 16 </td><td> DANTE OUT 17-32 </td></tr>
	<tr><td> 7 </td><td> DANTE 33-48 </td><td> 1 - 16 </td><td> DANTE OUT 33-48 </td></tr>
	<tr><td> 8 </td><td> DANTE 49-64 </td><td> 1 - 16 </td><td> DANTE OUT 49-64 </td></tr>
</tbody></table>

## Listener Streams

<table><tbody>
	<tr>
		<td><b> Stream </b></td>
		<td><b> Name </b></td>
		<td><b> Channel </b></td>
		<td><b> Assignment </b></td>
	</tr>
	<tr><td> 1 </td><td> MADIFACE 1-16 </td><td> 1 - 16 </td><td> MADIFACE IN 1-16</td></tr>
	<tr><td> 2 </td><td> MADIFACE 17-32 </td><td> 1 - 16 </td><td> MADIFACE IN 17-32</td></tr>
	<tr><td> 3 </td><td> MADIFACE 33-48 </td><td> 1 - 16 </td><td> MADIFACE IN 33-48</td></tr>
	<tr><td> 4 </td><td> MADIFACE 49-64 </td><td> 1 - 16 </td><td> MADIFACE IN 49-64</td></tr>
	<tr><td> 5 </td><td> DANTE 1-16 </td><td> 1 - 16 </td><td> DANTE IN 1-16</td></tr>
	<tr><td> 6 </td><td> DANTE 17-32 </td><td> 1 - 16 </td><td> DANTE IN 17-32</td></tr>
	<tr><td> 7 </td><td> DANTE 33-48 </td><td> 1 - 16 </td><td> DANTE IN 33-48</td></tr>
	<tr><td> 8 </td><td> DANTE 49-64 </td><td> 1 - 16 </td><td> DANTE IN 49-64</td></tr>
</tbody></table>

</details>

<details><summary>Dante Bridge </summary>

### AVB-Dante Bridge

You can use all of our audio facilities via DVS or another Dante interface by connecting to the Dante-AVB bridge. You do this like any other Dante device in Dante Controller.

Audio will then be forwarded to/from the 'DANTE' streams visible in Milan Manager.

## Dante Inputs

<table><tbody>
	<tr>
		<td><b> Device </b></td>
		<td><b> Channel </b></td>
		<td><b> Assignment </b></td>
	</tr>
	<tr><td rowspan='1'>AVB <-> DANTE</td><td> 1 - 64 </td><td> Milan (User Assign)</td></tr>
</tbody></table>

## Dante Outputs

<table><tbody>
	<tr>
		<td><b> Device </b></td>
		<td><b> Channel </b></td>
		<td><b> Assignment </b></td>
	</tr>
	<tr><td rowspan='1'>AVB <-> DANTE </td><td> 1 - 64 </td><td> Milan (User Assign)</td></tr>
</tbody></table>

### Dante-MADI Bridge

This bridge interfaces with channels 129-192 of the RME MADIface XT which is hosted by the Performance Lab PC.

## Dante Inputs

<table><tbody>
	<tr>
		<td><b> Device </b></td>
		<td><b> Channel </b></td>
		<td><b> Assignment </b></td>
	</tr>
	<tr><td rowspan='1'> DANTE <-> MADI </td><td> 1 - 64 </td><td>MADIFACE OUT 129-192</td></tr>
</tbody></table>

## Dante Outputs

<table><tbody>
	<tr>
		<td><b> Device </b></td>
		<td><b> Channel </b></td>
		<td><b> Assignment </b></td>
	</tr>
	<tr><td rowspan='1'> DANTE <-> MADI </td><td> 129 - 192 </td><td>MADIFACE IN 129-192</td></tr>
</tbody></table>

</details>

<details><summary>Tutorials & Resources</summary>

<a href="https://www.youtube.com/playlist?list=PL0QKeSpeDQwHGxAhD-cJSIBZC7_en5rck">**RME Totalmix Tutorials**</a>

</details>

# Local Area Network (LAN)

Our local area network ([LAN](https://en.wikipedia.org/wiki/Local_area_network)) provides a dedicated network for connecting and managing devices across the studios. It supports remote power management, RTP-MIDI connectivity, centralised file storage via our NAS, device configuration, and automatic discovery of DHCP-enabled devices. The network is accessible throughout the studios via Ethernet wall ports or by using one of our desktop computers.

<details>
<summary>Connecting to the LAN</summary>

Our local area network (LAN) allows connected devices to be automatically discovered and accessed from compatible applications or through a web browser.

To connect, plug your computer into any Ethernet wall port labelled **LAN**, or use one of the Thunderbolt cables connected to an <a href="https://www.owc.com/solutions/thunderbolt-dock">OWC Thunderbolt Dock</a> at each studio desk.

Once connected, your device will be assigned an IP address within the range <code> 192.168.0.10 - 192.168.0.25 </code> and gain access to available network devices.

<mark>Warning</mark> The LAN is isolated from the internet and only provides connectivity between devices within the studios. External access and internet-based services are therefore unavailable. If you are using macOS on a personal computer, you must manually <a href="https://support.apple.com/en-gb/guide/mac-help/mchlp2711/26/mac/26">change the network order in your system settings</a> to prevent the LAN from overriding your Wi-Fi connection.

If you are unsure whether you are connected correctly, verify your connection by pinging the relevant IP address before attempting to send further commands.

</details>

<details><summary>File Sharing</summary>

We maintain a Network Attached Storage ([NAS](https://en.wikipedia.org/wiki/Network-attached_storage)) system, which is accessible over the LAN using the student login credentials.

The file server can also be accessed from the Performance Lab PC and the Control Room Mac. The NAS provides the most efficient way to transfer files to and from the Performance Lab PC, as this computer is physically located in the Plant Room.

<mark>Warning</mark> These drives are intended for temporary storage only and may be periodically erased with prior notice.

### MacOS

To share files using our NAS, navigate to the **Network** section in a Finder window.

You should see a network location named `studio-files`, which will prompt you for the student login credentials when you attempt to connect.

Once connected, you can use this location like any other file system within Finder, as shown below.

![MacOS Finder window demonstrating how to connect to our NAS filesystem](/images/documentation/lan-nas-mac.png)

### Windows

To share files on Windows, navigate to: <pre>Control Panel > Network and Internet > Network and Sharing Centre > Change Advanced Setting</pre>

Make sure that **Network Discovery** is enabled. From the **Network** section of File Explorer, you should see a device named `STUDIO-FILES`, which will prompt you for the student login credentials when you attempt to connect.

Once connected, you can use this location like any other file system within File Explorer, as shown below.

![Windows File Browser demonstrating how to connect to our NAS filesystem](/images/documentation/lan-nas-windows.png)

</details>

<details><summary>Device Address Book</summary>

This section provides a reference for our network-enabled devices. Many of these addresses are only accessible through dedicated software, and some devices are password protected and restricted to management access. Members can use this list to assist with network troubleshooting, including verifying connections using ping.

If you encounter an issue with any device on our network, please contact a member of staff.

### Plant Room

<table><tbody>
	<tr><td style='width: 130px;'> 192.168.0.1 </td><td> TP Link - TL-R480T+ </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.2 </td><td> Extreme Networks - X440-G2-24P </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.3 </td><td> D-Link - DGS-3120-24PC </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.5 </td><td> Dell - PowerEdge T630 </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.6 </td><td> NAS </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.9 </td><td> Keene Electronics - IPMSW1 Plus </td></tr>
</tbody></table>

### Control Room

<table><tbody>
	<tr><td style='width: 130px;'> 192.168.0.10 </td><td> Netgear - GS305E </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.11 </td><td> Apple - Mac Mini </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.12 </td><td> iConnectivity - mioXL </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.13 </td><td> dbx - DriverRack PA 2 </td></tr>
</tbody></table>

### Live Room

<table><tbody>
	<tr><td style='width: 130px;'> 192.168.0.20 </td><td> Netgear - GS305E </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.21 </td><td> Keene Electronics - IPMSW1 Plus (Undercroft) </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.22 </td><td> iConnectivity - mioXL </td></tr>
</tbody></table>

### Performance Lab

<table><tbody>
	<tr><td style='width: 130px;'> 192.168.0.30 </td><td> Netgear - GS305E (Desk) </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.31 </td><td> Netgear - GS305E (System Rack) </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.32 </td><td> iConnectivity - mioXL </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.33 </td><td> d&b Audiotechnik - D20 </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.34 </td><td> ELC Lighting - dmXLAN node3 </td></tr>
	<tr><td style='width: 130px;'> 192.168.0.35 </td><td> Dell - PowerEdge T630 </td></tr>
</tbody></table>

</details>

# MIDI

Each studio is equipped with an RTP-MIDI interface, allowing all MIDI devices to be connected over the LAN.

<details><summary>Connecting a MIDI Device</summary>

We have installed a [mioXL](https://www.iconnectivity.com/s/mio-X-Series-User-Guide-v20220503-g9g8.pdf) RTP-MIDI interface in each of our studio rooms, and all front ports of the devices have been preconfigured and made discoverable over the LAN.

![Picture of a mioXL by iConnectivity, showing the preconfigured MIDI ports](/images/documentation/midi-mioXL.png)

A device connected to one of these ports can send and receive MIDI data with other devices on the LAN.
RTP-MIDI requires one device to act as a host. To host an RTP session on your computer, follow the steps below relevant to your operating system.
<!-- If a device refuses to connect, check that it is not connected to another device by using the software [Auracle X](https://www.iconnectivity.com/auracle-x-series), as only one connection per device is allowed at a given time. -->

### MacOS

To connect to an RTP-MIDI port on a MacOS computer, navigate to [MIDI Network Setup (via Audio MIDI Setup)](https://support.apple.com/en-gb/guide/audio-midi-setup/ams1012/mac).
Here you should see a list of available devices and MIDI ports, labelled according to their room and function. Create a `Session` to become a host device, and add the MIDI ports you wish to use by pressing `Connect`.
If you use this session to connect to multiple MIDI ports, this will collapse all of these ports down to a single 16-channel MIDI bus.
If you wish to use multiple devices independently within your work, you can also create multiple sessions and assign one for each MIDI device.

![Audio MIDI Setup window, demonstrating how to activate an RTP-MIDI port](/images/documentation/midi-mac-settings.png)

Each of these sessions will have a name, which for the example above is 'MIDI Demonstration'.
You should now see these named sessions appear in your DAW - for example, you can [connect to a network MIDI device in Ableton Live](https://help.ableton.com/hc/en-us/articles/209071169-Setting-up-a-virtual-MIDI-network), by using the Live preferences window as shown in the image below.

![Ableton Live window, demonstrating how to activate a MIDI device for input / output](/images/documentation/midi-ableton-mac.png)

### Windows

To connect to an RTP-MIDI port on a Windows computer, users must first install [rtpMIDI by Tobias Erichsen](https://www.tobias-erichsen.de/software/rtpmidi.html), and then also manually install [Apple's Bonjour Print Services](https://support.apple.com/en-us/106380).
This software is identical to Apple's Network MIDI Setup, and the method of hosting MIDI devices is also the same as described above.
<!-- To ensure Apple's Bonjour is properly running, press `Win + R`, type in `services.msc`, and look for 'Bonjour' - if it is not there, restart your computer. -->

![rtpMIDI window, demonstrating how to activate an RTP-MIDI port](/images/documentation/midi-windows-settings.png)

</details>

<details><summary>Yamaha Disklavier (Player Piano)</summary>

The Performance Lab features a Yamaha Disklavier HQ300SX player piano.
The Disklavier is permanently connected to the Performance Lab RTP-MIDI interface and is discoverable by the name 'PL Disklavier'.

To power this instrument, use the switch underneath the keyboard and the standby switch on the control panel.
If the mains is turned off at the wall, make sure to turn on the wall switch before turning on the switch underneath the keyboard.
<!-- And for powering down, you do not need to power it down at the wall, but in the event that this is necessary, the power switch under the keyboard should be switched off before turning off power at the wall. -->

<!-- ![/images/documentation/disklavier.png](Performance Lab Disklavier power switch) -->

</details>

# Spatial Audio

The Performance Lab features a 16.2 rectangular speaker array, and the Live Room features a 12.1 hemispherical speaker array.
These speaker systems are used for research into spatial audio and immersive composition, and can be used alongside many contemporary technologies that perform spatial audio decoding and encoding.

<mark>Warning</mark> Please note that neither spatial system provides a universal volume control. Output levels must therefore be set in the output section of RME Totalmix **before** sending audio to the system. If you are unsure how to control your noise exposure, please request a tutorial from studio management.

<details><summary>Powering our Speaker Systems</summary>

The power for the satellite speakers is controlled via UDP commands over LAN.
The easiest way to power on these is to log on to the Performance Lab PC and run the applications `PL-Spat` (Performance Lab) or `LR-Spat` (Live Room) from the Desktop.
To power the speakers from your own laptop, use the UDP commands below.
If you are a Windows user, you will need to first install [nmap](https://nmap.org/download.html) to send these commands.

### Performance Lab (16.2)

The d&b subwoofers are powered by the [d&b D20](https://www.dbaudio.com/global/en/products/amplifiers/d20/) located in the Performance Lab System Rack, whilst the Meyer satellites can be powered on or off with the following terminal commands.

#### MacOS

```bash
echo -n "KMS ON2" | nc -u -w1 192.168.0.9 65432
echo -n "KMS OFF2" | nc -u -w1 192.168.0.9 65432
```

#### Windows

```powershell
echo|set /p="KMS ON2" | ncat -u -w1 192.168.0.9 65432
echo|set /p="KMS OFF2" | ncat -u -w1 192.168.0.9 65432
```

### Live Room (12.1)

Power for the Meyer subwoofer is located on the wall, whilst the Meyer satellites can be powered on or off with the following terminal commands.

#### MacOS

```bash
echo -n "KMS ON1" | nc -u -w1 192.168.0.21 65432
echo -n "KMS OFF1" | nc -u -w1 192.168.0.21 65432
```

#### Windows

```powershell
echo|set /p="KMS ON1" | ncat -u -w1 192.168.0.21 65432
echo|set /p="KMS OFF1" | ncat -u -w1 192.168.0.21 65432
```

</details>

<details><summary>Speaker Positions</summary>

The following speaker positions are described in meters for all cartesian coordinates, x, y, z.
For all spherical coordinates, the radius r is specified in meters, whilst the azimuth and elevation angles, θ and ϕ, are specified in degrees.

### Performance Lab (16.2)

Within the Performance Lab, we operate a 16.2 system arranged in a rectangular cuboid, consisting of two rings of 8 speakers.

#### Satellites - [MM-4XP by Meyer Sound](https://meyersound.com/product/mm-4xp/)

<table><tbody>
	<tr><td><b> r </b></td><td><b> θ </b></td><td><b> ϕ </b></td><td><b> x </b></td><td><b> y </b></td><td><b> z </b></td></tr>
	<tr><td> 3.4 </td><td> -1.4 </td><td> 0.0 </td><td> -0.08 </td><td> 3.4 </td><td> 0.0 </td></tr>
	<tr><td> 3.25 </td><td> -45.4 </td><td> 0.0 </td><td> -2.31 </td><td> 2.28 </td><td> 0.0 </td></tr>
	<tr><td> 2.36 </td><td> -90.0 </td><td> 0.0 </td><td> -2.36 </td><td> 0.0 </td><td> 0.0 </td></tr>
	<tr><td> 2.92 </td><td> -136.5 </td><td> 0.0 </td><td> -2.01 </td><td> -2.12 </td><td> 0.0 </td></tr>
	<tr><td> 3.33 </td><td> -174.0 </td><td> 0.0 </td><td> -0.35 </td><td> -3.31 </td><td> 0.0 </td></tr>
	<tr><td> 3.15 </td><td> 131.8 </td><td> 0.0 </td><td> 2.35 </td><td> -2.1 </td><td> 0.0 </td></tr>
	<tr><td> 2.34 </td><td> 90.0 </td><td> 0.0 </td><td> 2.34 </td><td> 0.0 </td><td> 0.0 </td></tr>
	<tr><td> 3.2 </td><td> 48.1 </td><td> 0.0 </td><td> 2.38 </td><td> 2.14 </td><td> 0.0 </td></tr>
	<tr><td> 3.72 </td><td> -22.3 </td><td> 29.2 </td><td> -1.23 </td><td> 3.0 </td><td> 1.81 </td></tr>
	<tr><td> 2.81 </td><td> -67.0 </td><td> 31.7 </td><td> -2.2 </td><td> 0.93 </td><td> 1.48 </td></tr>
	<tr><td> 2.8 </td><td> -115.0 </td><td> 31.6 </td><td> -2.16 </td><td> -1.0 </td><td> 1.47 </td></tr>
	<tr><td> 3.54 </td><td> -158.0 </td><td> 25.1 </td><td> -1.2 </td><td> -2.97 </td><td> 1.5 </td></tr>
	<tr><td> 3.58 </td><td> 158.3 </td><td> 25.0 </td><td> 1.2 </td><td> -3.01 </td><td> 1.51 </td></tr>
	<tr><td> 3.03 </td><td> 112.7 </td><td> 33.3 </td><td> 2.34 </td><td> -0.98 </td><td> 1.66 </td></tr>
	<tr><td> 3.06 </td><td> 68.7 </td><td> 33.3 </td><td> 2.38 </td><td> 0.93 </td><td> 1.68 </td></tr>
	<tr><td> 3.7 </td><td> 22.5 </td><td> 29.3 </td><td> 1.23 </td><td> 2.98 </td><td> 1.81 </td></tr>
</tbody></table>

#### Subwoofers - [B4 by d&b Audiotechnik](https://www.dbaudio.com/global/en/products/series/t-series/b4-sub/)

<table><tbody>
	<tr><td><b> r </b></td><td><b> θ </b></td><td><b> x </b></td><td><b> y </b></td></tr>
	<tr><td> 2.14 </td><td> -85.0 </td><td> -2.132 </td><td> 0.187 </td></tr>
	<tr><td> 2.14 </td><td> 85.0 </td><td> 2.132 </td><td> 0.187 </td></tr>
</tbody></table>

### Live Room (12.1)

Within the Live Room, we operate a 12.1 speaker system arranged in a hemisphere, comprising of a lower ring of 7 speakers, an upper ring of 4 speakers, and a speaker at the zenith.

#### Satellites - [MM-4XP by Meyer Sound](https://meyersound.com/product/mm-4xp/)

<table><tbody>
	<tr><td><b> r </b></td><td><b> θ </b></td><td><b> ϕ </b></td><td><b> x </b></td><td><b> y </b></td><td><b> z </b></td></tr>
	<tr><td> 2.47 </td><td> 0.0 </td><td> 0.0 </td><td> 0.0 </td><td> 2.47 </td><td> 0.0 </td></tr>
	<tr><td> 2.68 </td><td> 42.5 </td><td> 0.0 </td><td> 1.81 </td><td> 1.98 </td><td> 0.0 </td></tr>
	<tr><td> 1.76 </td><td> 96.5 </td><td> 0.0 </td><td> 1.75 </td><td> -0.2 </td><td> 0.0 </td></tr>
	<tr><td> 2.26 </td><td> 152.5 </td><td> 0.0 </td><td> 1.04 </td><td> -2.0 </td><td> 0.0 </td></tr>
	<tr><td> 2.14 </td><td> -149.0 </td><td> 0.0 </td><td> -1.1 </td><td> -1.83 </td><td> 0.0 </td></tr>
	<tr><td> 1.78 </td><td> -93.5 </td><td> 0.0 </td><td> -1.78 </td><td> -0.11 </td><td> 0.0 </td></tr>
	<tr><td> 2.61 </td><td> -44.0 </td><td> 0.0 </td><td> -1.81 </td><td> 1.88 </td><td> 0.0 </td></tr>
	<tr><td> 2.2 </td><td> 0.0 </td><td> 27.5 </td><td> 0.0 </td><td> 1.95 </td><td> 1.02 </td></tr>
	<tr><td> 2.03 </td><td> 93.0 </td><td> 27.5 </td><td> 1.8 </td><td> -0.09 </td><td> 0.94 </td></tr>
	<tr><td> 2.0 </td><td> -177.0 </td><td> 27.5 </td><td> -0.09 </td><td> -1.77 </td><td> 0.92 </td></tr>
	<tr><td> 2.05 </td><td> -88.5 </td><td> 27.5 </td><td> -1.82 </td><td> 0.05 </td><td> 0.95 </td></tr>
	<tr><td> 0.93 </td><td> 0.0 </td><td> 90.0 </td><td> 0.0 </td><td> 0.0 </td><td> 0.93 </td></tr>
</tbody></table>

#### Subwoofer - [USW 1P by Meyer Sound](http://www.sotsound.com/fileserver/Equipment%20Information/usw-1p_resources/usw-1p_ds_c.pdf)

<table><tbody>
	<tr><td><b> r </b></td><td><b> θ </b></td><td><b> x </b></td><td><b> y </b></td></tr>
	<tr><td> 2.6 </td><td> 34.0 </td><td> 1.45 </td><td> 2.16 </td></tr>
</tbody></table>

</details>

# Motion Capture

The Performance Lab features a [Vicon MX motion capture system](https://help.vicon.com/space/LegacyCamDoc/11108354/Legacy+cameras+documentation?attachment=https://help.vicon.com/rest/api/content/11108354/child/attachment/att11108355/download&type=application/pdf&filename=T-Series_GoFurther_Rev1.3_2010Aug.pdf) with 12 fixed Bonita 10 optical cameras, 2 Bonita 720c video cameras, and a [Lock Studio+](<https://help.vicon.com/space/Vantage/15057687/Vicon+Lock++(legacy)+rear+panel>) for capturing generic analog signals and/or syncing to external devices.

<details><summary>Powering our System</summary>

The power for the motion capture system is controlled via UDP commands over LAN.
The easiest way to power on the motion capture is to log on to the Performance Lab PC and run the `Vicon Power` application from the Desktop.
To power the system from your own laptop, use the UDP commands below.
If you are a Windows user, you will need to first install [nmap](https://nmap.org/download.html) to send such commands via UDP.

#### MacOS

```bash
echo -n "KMS ON1" | nc -u -w1 192.168.0.9 65432
echo -n "KMS OFF1" | nc -u -w1 192.168.0.9 65432
```

#### Windows

```powershell
echo|set /p="KMS ON1" | ncat -u -w1 192.168.0.9 65432
echo|set /p="KMS OFF1" | ncat -u -w1 192.168.0.9 65432
```

</details>

<details><summary>Tutorials & Resources</summary>

<a href="https://www.youtube.com/watch?v=h4knk15grtw&list=PLxtdgDam3USUSIeuO6UloG3ogPsFNtEJS&index=5">**Vicon Nexus Tutorials**</a>

</details>

<!--

## System Overview

Vicon Bonita 10 optical camera system with 12 cameras.

## Software & Research Applications

We have licenses for Blade, Nexus and Tracker.

- **Blade 3:** For animation projects.

- **Nexus 2:** For life sciences.

- **Tracker 2:** For simple object tracking.

- **Datastream SDK:** A free developer kit to send/receive live motion data with OSC(?).

### Basic Operation

1. Login with student credentials. _(See Student Credentials)_

2. Run _~/Desktop/Vicon Control.exe_ and click **_"Turn On Vicon"_**.

3. Wait for cameras to turn on. They will blink red when ready to connect.

4. Open your software of choice (Nexus, Blade, Tracker).

5. Click **_Connect_** and check status. If connected successfully, the cameras will turn solid red and be visible in the your software's live view - click **_Go Live_**.

6. Place a marker within the capture volume. If you can see the marker on screen, the system is working and you can continue with the resources below.

7. If you cannot see the marker, see **_Troubleshooting: Motion Capture_**

8. When you are finished, please run ~/Desktop/Vicon Control.exe and click **_"Turn Off Vicon"._**

### Calibration

#### Session Calibration

##### Masking

#### System Calibration

### Advanced: Streaming Motion Capture Data

### Advanced: Syncing Capture Start/Stop with UDP

- MaxForLive: Start/Stop Transport with Vicon
- MaxForLive: Rename last recorded clip to 'Capture Name'

### Advanced: Adding Analog Devices

- Vicon Lock+
- Weidmuller Connectors **8**

Bottom row channels: 1-32

Top row channels: 33-64

Each connector allows for up to 8 channels. The top row of the connector is GND.

### Advanced: Timecode, Genlock & Video Sync

### Advanced: Bonita 720C Video Cameras -->

# DMX Lighting

The Performance Lab features an array of stage lights that are controlled via DMX over LAN.
The power for these lights is controlled using the labelled fuses in the Plant Room.

<details><summary>Our System</summary>

The stage lighting in the Performance Lab is connected to the LAN via a [dmXLAN node3 by ELC Lighting](https://www.elclighting.com/products/node3t), and can be controlled using the [dmXLAN](https://www.elclighting.com/software-products/dmxlan-v4) software.
This Performance Lab PC has been preconfigured with this software, and only requires a user to open the `Performance-Lab.dxl` template (`File > Open Recent`).
To control the lights from your own computer, install the dmXLAN software and download the Performance Lab template below.

<span>
	<a class='button' download href='/resources/dmx/Performance-Lab.dxl'>
		Performance Lab Template
	</a>
</span>

As a basic overview of the software, each light is defined as a virtually positioned **Fixture**, and has been made addressable as part of a single DMX universe.
These fixtures are controlled in the bottom right of the screen, where general brightness is controlled in the _Basic_ tab, whilst the rest of the controls are distributed across _Colour_, _Beam_, and _Extra_.
Multiple lights can be controlled simultaneously by selecting items from the **Groups** tab in the top left of the screen, and similarly presets can be stored and recalled via the **Scenes** tab.

![dmXLAN screenshot showing the Performance Lab template](/images/documentation/dmx-dmXLAN.png)

</details>

<details><summary>Advanced</summary>

If you wish to experiment with other lighting designs, such as those using floor lighting, or lights for special effect, our custom Fixture Library can be downloaded below.
This library contains all of our most common lighting equipment, and can be used either alongside the dmXLAN software, or ported to another piece of DMX compatible software.

<span>
	<a class='button' download href='/resources/dmx/C4DM-Fixture-Library.zip'>
		C4DM Fixture Library
	</a>
</span>

When using this fixture library with dmXLAN, you will need to manually set the library path, as in the preferences window pictured below.

![dmXLAN screenshot showing the Fixture Library path in preferences.](/images/documentation/dmx-fixture-library.png)

</details>

</div> <!-- for scss styling -->

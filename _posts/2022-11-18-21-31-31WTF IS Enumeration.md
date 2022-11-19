---
layout: post
title: WTF IS Enumeration 
date: 2022-11-18-21-31-31
categories: [Uncategorized]
---

## Enumeration


#### Concept

One of the things I've found in coming across the OSCP study material is the concept of enumeration.


The wikipedia definition of enumeration boils down to:

"""
A network enumerator or network scanner is a computer program used to retrieve usernames and info on groups, shares, and services of networked computers. This type of program scans networks for vulnerabilities in the security of that network. If there is a vulnerability with the security of the network, it will send a report back to a hacker who may use this info to exploit that network glitch to gain entry to the network or for other malicious activities. 
"""

Source: https://en.wikipedia.org/wiki/Network_enumeration



The defintion from EC-Council (Which has the Ethical Hacker cert) offers a much more concise and straightforward definition:

"""
During enumeration, information is systematically collected and individual systems are identified.
"""

Source: https://ilabs.eccouncil.org/enumeration/

In my opinion the later definition works better since it's much easier to conceptualize and fits easier within the reconisance framework of the attack cycle, as the former definition would seem to imply that the attack has already started when that may not be the case with enumeration.

There can be multiple different types of enumeration from OS enumeration, Web enumeration, username enumeration, enumeration for each specific service/port association.

#### Tools

There are a variety of tools that can be used for enumeration a solid list is found here:
https://web.archive.org/web/20111107065155/https://home.ubalt.edu/abento/753/enumeration/enumerationtools.html


NBTscan
DumpSec
Legion
Nat
SMBScanner
NBTDump
NBTEnum
Netcat

The only one left out that most people rely on is of course Nmap:
https://nmap.org/

Which does port scanning, OS guessing, service guessing, etc... all in one and is incredibly useful


With enumeration(and especially nmap) there can be a number of different types of approaches one can take from a fast port scan only getting the top 10 or 100 ports

```
nmap <SCAN TYPE: SYN -sS, TCP -sT, UDP -sU> -p1-100 -T5 <TARGET>
```

or one can go slow getting every port along the way

```
nmap -sS -p- -T0 <TARGET>
```

This can return the status of the port, possible OS, and possible vectors of attack/exploitation across various services.

Example:

```
Discovered open port 465/tcp on 67.43.11.187
Completed SYN Stealth Scan at 11:03, 3.65s elapsed (1000 total ports)
Initiating OS detection (try #1) against host2.amarbot.tk (67.43.11.187)
Retrying OS detection (try #2) against host2.amarbot.tk (67.43.11.187)
Nmap scan report for host2.amarbot.tk (67.43.11.187)
Host is up (0.00030s latency).
Not shown: 932 filtered ports, 56 closed ports
PORT STATE SERVICE
21/tcp open ftp
22/tcp open ssh
25/tcp open smtp
53/tcp open domain
80/tcp open http
110/tcp open pop3
143/tcp open imap
443/tcp open https
465/tcp open smtps
587/tcp open submission
993/tcp open imaps
995/tcp open pop3s
Device type: general purpose
Running (JUST GUESSING): Linux 2.6.X|3.X (90%), FreeBSD 6.X (86%)
OS CPE: cpe:/o:linux:linux_kernel:2.6 cpe:/o:linux:linux_kernel:3 cpe:/o:freebsd:freebsd:6.2
```

You can also have nmap be more verbose with the `-v` switch, or provide a summary by doing a scan without it.


This is entirely non-exhaustive, but a list of fairly common ports are:

21 – FTP
22 – SSH
25 – SMTP (sending email)
53 – DNS (domain name service)
80 – HTTP (web server)
110 – POP3 (email inbox)
123 – NTP (Network Time Protocol)
143 – IMAP (email inbox)
443 – HTTPS (secure web server)
465 – SMTPS (send secure email)
631 – CUPS (print server)
993 – IMAPS (secure email inbox)
995 – POP3 (secure email inbox)

It's also common to see weird stuff on higher ports, but those are the general basics.  


The Nmap switch/options summary is also extremely useful:
https://nmap.org/book/man-briefoptions.html

```

TARGET SPECIFICATION:
  Can pass hostnames, IP addresses, networks, etc.
  Ex: scanme.nmap.org, microsoft.com/24, 192.168.0.1; 10.0.0-255.1-254
  -iL <inputfilename>: Input from list of hosts/networks
  -iR <num hosts>: Choose random targets
  --exclude <host1[,host2][,host3],...>: Exclude hosts/networks
  --excludefile <exclude_file>: Exclude list from file


HOST DISCOVERY:
  -sL: List Scan - simply list targets to scan
  -sn: Ping Scan - disable port scan
  -Pn: Treat all hosts as online -- skip host discovery
  -PS/PA/PU/PY[portlist]: TCP SYN/ACK, UDP or SCTP discovery to given ports
  -PE/PP/PM: ICMP echo, timestamp, and netmask request discovery probes
  -PO[protocol list]: IP Protocol Ping
  -n/-R: Never do DNS resolution/Always resolve [default: sometimes]
  --dns-servers <serv1[,serv2],...>: Specify custom DNS servers
  --system-dns: Use OS's DNS resolver
  --traceroute: Trace hop path to each host


SCAN TECHNIQUES:
  -sS/sT/sA/sW/sM: TCP SYN/Connect()/ACK/Window/Maimon scans
  -sU: UDP Scan
  -sN/sF/sX: TCP Null, FIN, and Xmas scans
  --scanflags <flags>: Customize TCP scan flags
  -sI <zombie host[:probeport]>: Idle scan
  -sY/sZ: SCTP INIT/COOKIE-ECHO scans
  -sO: IP protocol scan
  -b <FTP relay host>: FTP bounce scan

PORT SPECIFICATION AND SCAN ORDER:
  -p <port ranges>: Only scan specified ports
    Ex: -p22; -p1-65535; -p U:53,111,137,T:21-25,80,139,8080,S:9
  --exclude-ports <port ranges>: Exclude the specified ports from scanning
  -F: Fast mode - Scan fewer ports than the default scan
  -r: Scan ports consecutively - don't randomize
  --top-ports <number>: Scan <number> most common ports
  --port-ratio <ratio>: Scan ports more common than <ratio>

SERVICE/VERSION DETECTION:
  -sV: Probe open ports to determine service/version info
  --version-intensity <level>: Set from 0 (light) to 9 (try all probes)
  --version-light: Limit to most likely probes (intensity 2)
  --version-all: Try every single probe (intensity 9)
  --version-trace: Show detailed version scan activity (for debugging)

SCRIPT SCAN:
  -sC: equivalent to --script=default
  --script=<Lua scripts>: <Lua scripts> is a comma separated list of
           directories, script-files or script-categories
  --script-args=<n1=v1,[n2=v2,...]>: provide arguments to scripts
  --script-args-file=filename: provide NSE script args in a file
  --script-trace: Show all data sent and received
  --script-updatedb: Update the script database.
  --script-help=<Lua scripts>: Show help about scripts.
           <Lua scripts> is a comma-separated list of script-files or
           script-categories.
       
OS DETECTION:
  -O: Enable OS detection
  --osscan-limit: Limit OS detection to promising targets
  --osscan-guess: Guess OS more aggressively

TIMING AND PERFORMANCE:
  Options which take <time> are in seconds, or append 'ms' (milliseconds),
  's' (seconds), 'm' (minutes), or 'h' (hours) to the value (e.g. 30m).
  -T<0-5>: Set timing template (higher is faster)
  --min-hostgroup/max-hostgroup <size>: Parallel host scan group sizes
  --min-parallelism/max-parallelism <numprobes>: Probe parallelization
  --min-rtt-timeout/max-rtt-timeout/initial-rtt-timeout <time>: Specifies
      probe round trip time.
  --max-retries <tries>: Caps number of port scan probe retransmissions.
  --host-timeout <time>: Give up on target after this long
  --scan-delay/--max-scan-delay <time>: Adjust delay between probes
  --min-rate <number>: Send packets no slower than <number> per second
  --max-rate <number>: Send packets no faster than <number> per second

FIREWALL/IDS EVASION AND SPOOFING:
  -f; --mtu <val>: fragment packets (optionally w/given MTU)
  -D <decoy1,decoy2[,ME],...>: Cloak a scan with decoys
  -S <IP_Address>: Spoof source address
  -e <iface>: Use specified interface
  -g/--source-port <portnum>: Use given port number
  --proxies <url1,[url2],...>: Relay connections through HTTP/SOCKS4 proxies
  --data <hex string>: Append a custom payload to sent packets
  --data-string <string>: Append a custom ASCII string to sent packets
  --data-length <num>: Append random data to sent packets
  --ip-options <options>: Send packets with specified ip options
  --ttl <val>: Set IP time-to-live field
  --spoof-mac <mac address/prefix/vendor name>: Spoof your MAC address
  --badsum: Send packets with a bogus TCP/UDP/SCTP checksum

OUTPUT:
  -oN/-oX/-oS/-oG <file>: Output scan in normal, XML, s|<rIpt kIddi3,
     and Grepable format, respectively, to the given filename.
  -oA <basename>: Output in the three major formats at once
  -v: Increase verbosity level (use -vv or more for greater effect)
  -d: Increase debugging level (use -dd or more for greater effect)
  --reason: Display the reason a port is in a particular state
  --open: Only show open (or possibly open) ports
  --packet-trace: Show all packets sent and received
  --iflist: Print host interfaces and routes (for debugging)
  --append-output: Append to rather than clobber specified output files
  --resume <filename>: Resume an aborted scan
  --noninteractive: Disable runtime interactions via keyboard
  --stylesheet <path/URL>: XSL stylesheet to transform XML output to HTML
  --webxml: Reference stylesheet from Nmap.Org for more portable XML
  --no-stylesheet: Prevent associating of XSL stylesheet w/XML output

MISC:
  -6: Enable IPv6 scanning
  -A: Enable OS detection, version detection, script scanning, and traceroute
  --datadir <dirname>: Specify custom Nmap data file location
  --send-eth/--send-ip: Send using raw ethernet frames or IP packets
  --privileged: Assume that the user is fully privileged
  --unprivileged: Assume the user lacks raw socket privileges
  -V: Print version number
  -h: Print this help summary page.

EXAMPLES:
  nmap -v -A scanme.nmap.org
  nmap -v -sn 192.168.0.0/16 10.0.0.0/8
  nmap -v -iR 10000 -Pn -p 80
SEE THE MAN PAGE (https://nmap.org/book/man.html) FOR MORE OPTIONS AND EXAMPLES
```

#### Automatic vs Manual

One of the distinctions that is commonly made with little explanation is "Manual vs Automatic enumeration".  In this case because everyting is code, conceptually everything can seem automatic.  In reality what is meant is "Having a tool enumerate and list out all the issues" (like nmap above) OR "Manually typing a line of specific code to dig further into a system/issue".  
An example of this is one could run a scan on a machine to find out various bits of networking information such as Nmap above (the automated tooling portion of it), but if you were actually on that machine an automated tool like Nmap may not help you figure out things like where the files are at, what users are there, useful places to find creds, etc... and for that you may need to rely on more manual methods to determine those specific pieces of information.

Some examples of more specific commands to figure out that information might be:

```
whoami
echo %username%
net user
net user (username)
echo %userprofile%
net localgroup
net config Workstation | find "User name"
query user
wmic useraccount get name
wmic /node: "127.0.0.1" computersystem get username
qwinsta
reg.exe query "HKLM\Software\Microsoft\Windows NT\CurrentVersion\WinLogon" /v DefaultUserName
reg.exe query "HKLM\Software\Microsoft\Windows NT\CurrentVersion\WinLogon" /v DefaultPassword
```


In my opinion the distinction of automatic vs manual doesn't help me conceptually because all of the commands are tools that automatically come back with information.  They all involve typing in a set or series of commands that enable the tool or OS to come back with a set of data that may be useful or not.  Because of the conceptual confusion I have between automatic vs manual it's easier for me to understand and abstract it away as "Generic vs Specific" enumeration, or another way to think about it is 80% vs 20% enumeration (based on the 80/20 rule).  

Tools like Nmap will tell you general things, and they may not always be correct and you may have to drill down more specifically to get the correct data that you need.  

#### Summary

In summary, enumeration is the reconnisance process of gathering information about hosts covering everything from ports and services to the OS everything in between.  There are a wide variety of tools that can help gather general information on a system or set of systems, but you may need to get more specific data using more nuanced commands or switches.  
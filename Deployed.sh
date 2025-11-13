#!/bin/bash
set -e
git push  -f gandi master
ssh e0de6376-bfe1-11f0-b92e-00163e94b645@git.sd3.gpaas.net deploy escanderenovation.fr.git

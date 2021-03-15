
echo "******************************************"
echo "build start"
echo "******************************************"
echo ""
echo ""

Path=`pwd`;
PackagesPath=${Path}/packages;
PackagesList=$(ls $PackagesPath);
for PackageName in $PackagesList
do
echo ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
echo "building " ${PackageName}
PackagePath=${PackagesPath}/${PackageName}
cd ${PackagePath}
yarn rollup
cd ..
done
echo ""
echo ""
echo "******************************************"
echo "build finished"
echo "******************************************"

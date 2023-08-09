import Top from "../../components/Top";
import { data } from "../../components";
import Head from "next/head";

export default function Index({ item }) {
  return (
    <>
      <Head>
        <title>{item?.name}</title>
        <meta name="description" content={item?.description} />
        <meta name="keywords" content={item?.name} />
        <meta name="title" content={`${item?.name} - Inorins Technologies`} />
      </Head>
      <Top title={item?.name} detail={item?.description} form={false} />
      <section className="container mx-auto px-4 lg:px-10 my-10 bobottom">
        <h2 className="text-center">System Information</h2>
        <div className="grid grid-cols-12 gap-8">
          {item?.name?.includes("Banquier") && (
            <>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <h3>System Architecture</h3>
                <ul>
                  <li>Central Database System based on Oracle RDBMS</li>
                  <li>Multitier Architecture</li>
                  <li>Web Based Application System</li>
                </ul>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <h3>Application Security</h3>
                <ul>
                  <li>Roles and Privileges based on Departmental Functions</li>
                  <li>Exposure to modules based on privilege only</li>
                  <li>Maintaining log of all activities</li>
                  <li>Audit trail of modified/deleted data</li>
                  <li>Auto log off of the unattended system</li>
                </ul>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <h3>Password Security</h3>
                <ul>
                  <li>Enforced Strong Password Combination</li>
                  <li>Strongly Encrypted Password</li>
                  <li>Periodic Password Change Rule</li>
                  <li>Initial change of password provided by admin</li>
                </ul>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <h3>Ledgers Management</h3>
                <ul>
                  <li>User definable Organizational Chart of Accounts</li>
                  <li>Centrally controlled Ledger Heads</li>
                  <li>
                    User designable special vouchers in a voucher transaction
                  </li>
                  <li>System automation for opening of transaction ledgers</li>
                  <li>Easily customizable entry for voucher transactions</li>
                  <li>
                    Real time reflection of all transactions in the system
                  </li>
                </ul>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <h3>Account Management</h3>
                <ul>
                  <li>
                    Multiple financial accounts based on their maintenance and
                    operation modes
                  </li>

                  <li>
                    Capable of designing wide varieties of banking accounts with
                    scheduled collections (Recurring Deposit) and or
                    disbursements or both.
                  </li>

                  <li>
                    Easy managablle Agency (Bank) Accounts, Placement, Lending,
                    Borrowing, Receivables, Payables and other Office Accounts
                  </li>
                </ul>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <h3>Variable Products and Schemes</h3>
                <ul>
                  <li>
                    Multiple products can be opened under one account type
                    according to the banking policy
                  </li>
                  <li>
                    Based on configuration of the account type, different
                    schemes can be defined
                  </li>
                  <li>
                    Flexible schemes and any tailored scheme can be design for
                    each product
                  </li>
                  <li>
                    Better monitoring and management of customer schemes due to
                    flexible system nature
                  </li>

                  <li>
                    Flexible in switching between schemes or account types
                    without closing any accounts
                  </li>
                </ul>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <h3>Varieties of Interest Modes</h3>
                <ul>
                  <li>Interest on Daily Closing Principal</li>

                  <li>
                    Interest on Daily Closing Principal Based on Principal Range
                  </li>
                  <li>
                    Interest on Daily Closing Principal Based on Principal
                    Movement
                  </li>
                  <li>Interest on Daily Closing Principal and Interest</li>
                  <li>
                    Interest on Daily Closing Principal and Miscellaneous
                    Balance
                  </li>
                  <li>
                    Interest on Daily Principal, Interest and Miscellaneous
                    Balances
                  </li>
                  <li>Interest based on minimum balance</li>
                  <li>Flexible on new interest schemes</li>
                </ul>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <h3>Self managed customer accounts</h3>
                <ul>
                  <li>Deposit Accounts</li>
                  <li>Loan Accounts</li>
                  <li>Inter Bank Accounts</li>
                  <li>Inter Branch Accounts</li>
                </ul>
              </div>
            </>
          )}
          {(item?.name == "Mobile Banking" ||
            item?.name == "Internet Banking") && (
              <>
                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <h3>System Architecture</h3>
                  <ul>
                    {item?.name == "Mobile Banking" ? (
                      <li>Available on both Android and Ios</li>
                    ) : (
                      <li>Supported on all kinds of browsers</li>
                    )}
                    <li>
                      Entirely connected with CBS through strong and secure API
                    </li>
                    {/* <li> */}
                  </ul>
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <h3>Application Security</h3>
                  <ul>
                    <li>Strong password requirements</li>
                    <li>Biometric login features</li>
                    <li>OTP for each transaction</li>
                    <li>Maintaining log of all activities </li>
                  </ul>
                </div>
                {/* <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <ul>
                  <li></li>
                </ul>
              </div> */}
              </>
            )}
          {item?.content?.length > 0 && (
            <div className="col-span-12">
              <h2 className="text-center">Additional Features</h2>
            </div>
          )}
          {item?.content?.map((item, index) => (
            <div
              className="col-span-12 sm:col-span-6 lg:col-span-4"
              key={index}
            >
              <h4 className="text-center mb-0 py-1">{item}</h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: data.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const services = data;
  const item = services.find((service) => service.slug === params?.slug);
  return {
    props: {
      item,
    },
  };
}

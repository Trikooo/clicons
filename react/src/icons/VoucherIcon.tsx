import React from 'react';
import config from '../config';

interface VoucherIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name VoucherIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/voucher)
 * @see {@link https://clicons.dev/icon/voucher}
 */
const VoucherIcon = React.forwardRef<SVGSVGElement, VoucherIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4.56324 5.55783L7.4 7.99976M7.4 7.99976L11 10.9998M7.4 7.99976L4.50512 10.3863M7.4 7.99976L11 4.99976M2 4.49976C2 5.32818 2.67157 5.99976 3.5 5.99976C4.32843 5.99976 5 5.32818 5 4.49976C5 3.67133 4.32843 2.99976 3.5 2.99976C2.67157 2.99976 2 3.67133 2 4.49976ZM2 11.4998C2 12.3282 2.67157 12.9998 3.5 12.9998C4.32843 12.9998 5 12.3282 5 11.4998C5 10.6713 4.32843 9.99976 3.5 9.99976C2.67157 9.99976 2 10.6713 2 11.4998Z'
    }
  ],
  [
    'path',
    {
      d: 'M8 15.0768V14M19.8462 7.27029C20.3409 7.41042 20.7309 7.62313 21.0537 7.94599C21.3766 8.26886 21.5893 8.65887 21.7294 9.1536M21.7294 18.8461C21.5893 19.3408 21.3766 19.7308 21.0537 20.0537C20.7309 20.3766 20.3409 20.5893 19.8462 20.7294M10.1538 20.7294C9.65913 20.5893 9.26913 20.3766 8.94627 20.0537C8.62341 19.7308 8.41071 19.3408 8.27058 18.8461M13.9231 21H16.0769M22 15.0768V12.9229M16.0769 7H13.9231'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

VoucherIcon.displayName = 'VoucherIcon';
export default VoucherIcon;

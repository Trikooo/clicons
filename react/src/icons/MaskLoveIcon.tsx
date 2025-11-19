import React from 'react';
import config from '../config';

interface MaskLoveIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MaskLoveIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mask-love)
 * @see {@link https://clicons.dev/icon/mask-love}
 */
const MaskLoveIcon = React.forwardRef<SVGSVGElement, MaskLoveIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.1418 13.442C15.3486 12.7109 16.4018 13.0055 17.0345 13.4748C17.294 13.6672 17.4237 13.7634 17.5 13.7634C17.5763 13.7634 17.706 13.6672 17.9655 13.4748C18.5982 13.0055 19.6514 12.7109 20.8582 13.442C22.4419 14.4014 22.8002 17.5667 19.1472 20.2372C18.4514 20.7458 18.1035 21.0001 17.5 21.0001C16.8965 21.0001 16.5486 20.7458 15.8528 20.2372C12.1998 17.5667 12.5581 14.4014 14.1418 13.442Z'
    }
  ],
  [
    'path',
    {
      d: 'M6 8.00012C7.46589 7.38689 9.61061 7.00012 12 7.00012C14.3894 7.00012 16.5341 7.38689 18 8.00012'
    }
  ],
  [
    'path',
    {
      d: 'M6 9.00012C6 12.2572 4.1688 13.942 3.05731 13.9986C3.02153 14.0004 2.98891 13.9809 2.97139 13.9497C2.15656 12.4967 2 10.788 2 9.00012C2 5.68641 2.89543 3.00012 4 3.00012C5.10457 3.00012 6 5.68641 6 9.00012Z'
    }
  ],
  [
    'path',
    {
      d: 'M18.06 10.0201C18.0094 9.66725 18 9.40065 18 9.00012C18 5.68641 18.8954 3.00012 20 3.00012C21.1046 3.00012 22 5.68641 22 9.00012C22 9.381 22 10.1401 21.948 10.5201'
    }
  ],
  [
    'path',
    {
      d: 'M11 19.0001C8.04 18.7801 4.74 17.0401 3 14.0001'
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

MaskLoveIcon.displayName = 'MaskLoveIcon';
export default MaskLoveIcon;

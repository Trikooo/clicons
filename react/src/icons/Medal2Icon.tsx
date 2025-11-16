import React from 'react';
import config from '../config';

interface Medal2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Medal2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/medal2)
 * @see {@link https://clicons.dev/icon/medal2}
 */
const Medal2Icon = React.forwardRef<SVGSVGElement, Medal2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3 5.11296C3 4.56029 3 4.28395 3.04289 4.05373C3.23304 3.03312 4.02565 2.23473 5.03889 2.0432C5.26745 2 5.54179 2 6.09048 2H17.9095C18.4582 2 18.7325 2 18.9611 2.0432C19.9743 2.23473 20.767 3.03312 20.9571 4.05373C21 4.28395 21 4.56029 21 5.11296C21 5.6552 21 5.92631 20.9685 6.17771C20.8309 7.27541 20.2512 8.26781 19.3654 8.92208C19.1625 9.07192 18.9272 9.20359 18.4566 9.46692L15.8851 10.9059C13.9861 11.9686 13.0365 12.5 12 12.5C10.9635 12.5 10.0139 11.9686 8.11486 10.9059L5.54338 9.46692C5.0728 9.20359 4.83752 9.07192 4.63465 8.92208C3.74885 8.26781 3.16914 7.27541 3.03152 6.17771C3 5.92631 3 5.6552 3 5.11296Z'
    }
  ],
  [
    'path',
    {
      d: 'M8 5V6M12 5V8M16 5V6'
    }
  ],
  [
    'path',
    {
      d: 'M12.7774 13.6499L13.5693 15.2468C13.6773 15.4691 13.9653 15.6823 14.2083 15.7231L15.6436 15.9636C16.5615 16.1178 16.7775 16.7893 16.1161 17.4516L15.0002 18.5767C14.8112 18.7673 14.7077 19.1347 14.7662 19.3979L15.0857 20.7906C15.3377 21.893 14.7572 22.3195 13.7898 21.7433L12.4445 20.9403C12.2015 20.7952 11.801 20.7952 11.5536 20.9403L10.2082 21.7433C9.24533 22.3195 8.66039 21.8885 8.91236 20.7906L9.23183 19.3979C9.29032 19.1347 9.18683 18.7673 8.99785 18.5767L7.88198 17.4516C7.22505 16.7893 7.43653 16.1178 8.35443 15.9636L9.78977 15.7231C10.0282 15.6823 10.3162 15.4691 10.4242 15.2468L11.2161 13.6499C11.6481 12.7834 12.35 12.7834 12.7774 13.6499Z'
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

Medal2Icon.displayName = 'Medal2Icon';
export default Medal2Icon;

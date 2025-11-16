import React from 'react';
import config from '../config';

interface Ticket2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Ticket2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ticket2)
 * @see {@link https://clicons.dev/icon/ticket2}
 */
const Ticket2Icon = React.forwardRef<SVGSVGElement, Ticket2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19.7085 7.65038C19.8657 7.49323 20.1365 7.47721 20.2957 7.65093C21.2284 8.66824 21.7446 9.42151 21.9146 10.2557C22.0124 10.7357 22.0263 11.2242 21.9557 11.6994C21.7649 12.9836 20.7244 14.0241 18.6434 16.1051L16.1051 18.6434C14.0241 20.7244 12.9836 21.7649 11.6994 21.9557C11.2242 22.0263 10.7357 22.0124 10.2557 21.9146C9.4216 21.7446 8.66841 21.2285 7.65127 20.296C7.47734 20.1366 7.49342 19.8655 7.65074 19.7082C8.52693 18.832 8.48529 17.3698 7.55776 16.4422C6.63022 15.5147 5.16802 15.4731 4.29183 16.3493C4.13451 16.5066 3.86341 16.5227 3.70395 16.3487C2.77146 15.3316 2.25536 14.5784 2.08539 13.7443C1.98759 13.2643 1.97368 12.7758 2.04429 12.3006C2.23513 11.0164 3.27561 9.97588 5.35657 7.89492L7.89492 5.35657C9.97588 3.27561 11.0164 2.23513 12.3006 2.04428C12.7758 1.97368 13.2643 1.98759 13.7443 2.08539C14.5785 2.25538 15.3318 2.77157 16.3491 3.70427C16.5228 3.86355 16.5068 4.13432 16.3496 4.29147C15.4734 5.16765 15.5151 6.62985 16.4426 7.55739C17.3701 8.48493 18.8324 8.52656 19.7085 7.65038Z'
    }
  ],
  [
    'path',
    {
      d: 'M19 15L9 5'
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

Ticket2Icon.displayName = 'Ticket2Icon';
export default Ticket2Icon;

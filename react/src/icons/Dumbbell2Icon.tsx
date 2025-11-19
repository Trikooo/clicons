import React from 'react';
import config from '../config';

interface Dumbbell2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Dumbbell2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/dumbbell2)
 * @see {@link https://clicons.dev/icon/dumbbell2}
 */
const Dumbbell2Icon = React.forwardRef<SVGSVGElement, Dumbbell2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16 8C15.7562 8.73137 15.2546 9.29277 14.5446 9.60753C12.2642 10.6185 10.6185 12.2642 9.60753 14.5446C9.29277 15.2546 8.73137 15.7562 8 16'
    }
  ],
  [
    'path',
    {
      d: 'M3.2 20.8L2 22M20.8 3.2L22 2'
    }
  ],
  [
    'path',
    {
      d: 'M17.7882 2.422L16.276 3.87515L20.1166 7.75162L21.5942 6.31689C22.0377 5.7945 22.1735 5.40098 21.6214 4.67621L20.5156 3.51329L19.3946 2.40749C18.678 1.76473 18.1136 2.11058 17.7882 2.422Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.0115 3.75761C15.1221 2.58379 15.8827 3.41921 16.2733 3.8844L20.081 7.70737C20.5549 8.08731 21.4219 8.81627 20.276 9.95135C20.0911 10.1345 19.9098 10.3263 19.7089 10.4916C18.967 11.1019 18.255 10.596 17.8777 10.1311L14.002 6.25543C13.5939 5.88887 12.8888 5.22472 13.4843 4.33694C13.6448 4.13206 13.8326 3.94666 14.0115 3.75761Z'
    }
  ],
  [
    'path',
    {
      d: 'M4.58743 21.6202L3.44609 20.4922L2.36213 19.35C1.71891 18.7068 2.09 18.0635 2.40765 17.7442L3.88972 16.2603L7.74631 20.1336L6.22834 21.6247C5.69748 22.058 5.33348 22.1907 4.6195 21.6247M6.22333 13.9244C5.83272 13.4592 5.07209 12.6238 3.96149 13.7976C3.78262 13.9866 3.59481 14.172 3.43432 14.3769C2.83883 15.2647 3.54386 15.9289 3.95194 16.2954L7.82772 20.1711C8.20497 20.636 8.91698 21.1419 9.65885 20.5316C9.85984 20.3663 10.0411 20.1745 10.226 19.9913C11.3719 18.8563 10.5049 18.1273 10.031 17.7474L6.22333 13.9244Z'
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

Dumbbell2Icon.displayName = 'Dumbbell2Icon';
export default Dumbbell2Icon;

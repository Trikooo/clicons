import React from 'react';
import config from '../config';

interface MagicWand3IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Size of the icon in pixels */
  size?: number;
  /** Color of the icon */
  color?: string;
  /** Stroke width of the icon */
  strokeWidth?: number;
  /** Use absolute stroke width, ignores scaling */
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MagicWand3Icon
 * @description SVG icon component from Clicons, renders SVG Element with children.
 * @preview ![img](https://clicons.dev/icon/magic-wand3)
 * @see {@link https://clicons.dev/icon/magic-wand3} - Icon preview
 * @see {@link https://clicons.dev} - Clicons documentation
 */
const MagicWand3Icon = React.forwardRef<SVGSVGElement, MagicWand3IconProps>(
  (
    {
      size,
      color,
      strokeWidth,
      absoluteStrokeWidth,
      className = '',
      ...rest
    },
    ref
  ) => {
    const finalSize = size ?? config.defaultSize ?? 16;
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.8;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';

    const iconData = [
  [
    'path',
    {
      d: 'M15 15L16.5 16.5',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M16.9391 19.0593C16.3536 18.4739 16.3536 17.5246 16.9391 16.9391C17.5246 16.3536 18.4739 16.3536 19.0593 16.9391L21.0609 18.9407C21.6464 19.5261 21.6464 20.4754 21.0609 21.0609C20.4754 21.6464 19.5261 21.6464 18.9407 21.0609L16.9391 19.0593Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeWidth: '1.5'
    }
  ],
  [
    'path',
    {
      d: 'M5.39321 3.57735L8.18155 4.51716C8.56707 4.65061 9.15209 4.56335 9.48335 4.32736L11.4394 2.93236C12.6909 2.04083 13.7267 2.57255 13.7278 4.11802L13.7385 6.73427C13.7403 7.17734 14.0485 7.72717 14.4239 7.96607L16.4225 9.2191C18.0034 10.212 17.8236 11.3875 16.0219 11.8442L13.5143 12.4774C13.0612 12.5916 12.5938 13.0591 12.4744 13.5175L11.8413 16.0256C11.3899 17.8224 10.2041 18.0021 9.21671 16.4262L7.96391 14.4272C7.72505 14.0518 7.17533 13.7436 6.73234 13.7418L4.11658 13.731C2.57665 13.7246 2.03977 12.6939 2.93114 11.4422L4.32588 9.48579C4.55657 9.15972 4.64382 8.57459 4.51039 8.189L3.57076 5.40014C3.06353 3.88424 3.88284 3.06477 5.39321 3.57735Z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '1.5'
    }
  ]
];

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
        {iconData.map(([tag, attrs]: any, index: number) => {
          const { key, ...restAttrs } = attrs;

          const mergedAttrs = {
            ...restAttrs,
            ...(tag === 'path' || tag === 'circle' || tag === 'rect' || tag === 'line' || tag === 'polyline' || tag === 'polygon'
              ? {
                  stroke: restAttrs.stroke ? restAttrs.stroke.replace('currentColor', finalColor) : finalColor,
                  fill: restAttrs.fill ? restAttrs.fill.replace('currentColor', finalColor) : restAttrs.fill,
                  strokeWidth: finalAbsoluteStrokeWidth
                    ? finalStrokeWidth
                    : typeof finalStrokeWidth !== 'undefined'
                      ? finalStrokeWidth
                      : restAttrs.strokeWidth,
                }
              : {}),
          };

          const Element = tag as any;
          return <Element key={index} {...mergedAttrs} />;
        })}
      </svg>
    );
  }
);

MagicWand3Icon.displayName = 'MagicWand3Icon';
export default MagicWand3Icon;
